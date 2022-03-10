import React, { useEffect, useRef, useState } from "react";
import _ from "lodash";
import RGL, { Layout, WidthProvider } from "react-grid-layout";
import LayoutItemElementWrapper from "./LayoutItemElement";
import Card from "new/core/elements/Card";
import AddIcon from "@material-ui/icons/Add";
import DropdownMenu from "new/core/elements/DropdownMenu";
import { UIUserAction } from "new/domain/types/UserAction";
import { EntitiyGridLayoutData, LayoutElement, LayoutElementRenderer, LayoutElementUI } from "./LayoutItemElement/types";
import LayoutTextElement from "./LayoutItemElement/LayoutTextElement/LayoutTextElement";
import produce from "immer";
import { mapLayoutElementsToLayoutElementsUI, mapLayoutElementToLayoutElementUI } from "./utils";
import shortid from "shortid";
import { useEditMode } from "new/domain/contexts/EditModeContext";
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core/styles";
import LayoutBinderElement from "./LayoutItemElement/LayoutBinderElement/LayoutBinderElement";
import { Entity } from "new/domain/types/entity.types";
import { GridLayoutItemProps } from "new/core/gridLayout/types";
import { layouts } from "chart.js";
import GridLayoutItemWrapper from "new/core/gridLayout/GridLayoutItemWrapper";
import { boolean } from "yup";
import { read } from "fs";
import clsx from "clsx";

export interface ItemLayoutProps extends GridLayoutItemProps {
  onLayoutChange?: any,
  data: any,
  item?: Entity
}

const ReactGridLayout = WidthProvider(RGL);

const generateLayout = (items: LayoutElement[]) => {
  return items.map((item, i) => {
    const y: any = item.layout?.y || Math.ceil(Math.random() * 4) + 1;
    return {
      x: (i * 2) % 4,
      y: Math.floor(i / 6) * y,
      w: item.layout?.minWidth || 4,
      h: item.layout?.minHeight || 3,
      i: item.key,
      resizeHandles: ["se"],
    };
  });
}

export const useItemLayoutStyles = makeStyles((theme: Theme) => ({
    root: {
        border: "dashed 1px black",
        boxShadow: "none"
    },
    elementWrapper: {
      backgroundColor: "white",
      position: "relative",
      width: "100%",
      height: "100%",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    elementWrapperEditModeStyle: {
        borderRadius: 10,
        border: 'dashed 1px gray',
    }
}));


const ItemLayout: React.FC<ItemLayoutProps> = ({onLayoutChange, data, item, injectedProps}) => {
  const [items, setItems] = useState<LayoutElementUI[]>([]);
  //const [LayoutData, setLayoutData] = useState<EntitiyGridLayoutData>();
  const layoutDataRef = useRef<EntitiyGridLayoutData>();
  const itemsRef = useRef<LayoutElementUI[]>(items);

  const [layout, setLayout] = useState(null);
  const [ready, setReady] = useState(false);
  const layoutRef = useRef([]);
  const editMode = useEditMode();
  const classes = useItemLayoutStyles();

  const handleOnChange = (o: any) => {
    editMode && onLayoutChange(o)
  }

  const updateLayout = (layout: any) => {
    layoutRef.current = layout;
    setLayout(layout);
  }

  const updateItems = (items: LayoutElementUI[]) => {
    itemsRef.current = items;
    setItems(items);
  }

  const getItems = () => {
    return itemsRef.current;
  }

  const getLayout: () => Layout[] = () => {
    return layoutRef.current;
  }

  useEffect(() => {
    if(!items) {
      return
    }
    const layouts = getLayout().filter((t: any) => items.find(i => i.key === t.i));
    handleOnChange({layouts, items, injectedProps});
  }, [items])


  useEffect(() => {
    handleOnChange({layouts: layout, items, injectedProps})
  }, [injectedProps?.style?.width, injectedProps?.style?.height])

  useEffect(() => {
    if(data) {
      updateItems(mapLayoutElementsToLayoutElementsUI(data.items, getLayoutElementItemRender))
      //@ts-ignore
      updateLayout(data.layouts)
      //@ts-ignore
      handleLayoutChange(data.layouts)
      setReady(true);
    } else {
      updateItems(mapLayoutElementsToLayoutElementsUI([], getLayoutElementItemRender))
      //@ts-ignore
      updateLayout([])
      //@ts-ignore
      handleLayoutChange([])
      setReady(true);
    }
  }, [])


  const handleLayoutChange = (layout: any) => {
    handleOnChange({layouts: layout, items, injectedProps});
    updateLayout(layout)
  }

  const getBinderElement: (key: string) => LayoutElementUI = (key)  => {
    const element: LayoutElement =  {
      id: 0,
      key: key,
      type: "Binder",
      props: {value: ""},
      layout: {
        minWidth: 4,
        minHeight: 3
      }
    };
    return mapLayoutElementToLayoutElementUI(element, getLayoutElementItemRender);
  };

  const getTextElement: (key: string) => LayoutElementUI = (key)  => {
    const element: LayoutElement =  {
      id: 0,
      key: key,
      type: "Text",
      props: {value: ""},
      layout: {
        minWidth: 4,
        minHeight: 3
      }
    };
    return mapLayoutElementToLayoutElementUI(element, getLayoutElementItemRender);
  };

  const onDelete = (key: string) => {
    setItems(getItems().filter(t => t.key !== key));
  };

  const getLayoutElementItemRender: (element: LayoutElement) => any = (element) => {
    switch(element.type) {
      case "Text": 
        return (props: any) => 
          <LayoutTextElement 
            {...props} 
            defaultValue={element.props?.value} 
            onDone={(value) => setLayoutElementProps(element.key, {value})}
            onDelete={onDelete}
          />
      case "Binder": 
        return (props: any) => 
            <LayoutBinderElement 
              {...props} 
              defaultValue={element.props?.value} 
              onDone={(value) => setLayoutElementProps(element.key, value)}
              source={item?.attributes}
              onDelete={onDelete}
            />
    }
  }

  const setLayoutElementProps = (key: string, value: object) => {
    console.log("b", value)
    updateItems(produce(itemsRef.current, draftItems => {
      const index = draftItems?.findIndex(t => t.key === key);
      if(index != undefined && index >= 0) {
        draftItems[index].props = {
          ...draftItems?.[index].props,
          ...value
        }
      }
    }))
  }

  const getAddLayoutElementDropdownActions: () => UIUserAction[]  = () => {
    return ([
      {
          id: "addTextElemet",
          title: "Add Text",
          handler: () => {
            updateItems(produce(items, draft => {
              draft?.push(getTextElement("text-" + shortid.generate()))
            }))
          }
      },
      {
        id: "addBindElement",
        title: "Add Binder",
        handler: () => {
          updateItems(produce(items, draft => {
              draft?.push(getBinderElement("Binder-" + shortid.generate()))
            }))
        }
    }
    ])
  }

  return (
    <Card className={classes.root}>
          {editMode && <div style={{position: "absolute", right: 10, top: 10}} onClick={() => {
          
            }}>
            <AddLayoutElementDropdown actions={getAddLayoutElementDropdownActions()} />
          </div>}
          {ready && <ReactGridLayout
            layout={layout}
            onLayoutChange={handleLayoutChange}
            cols={12}
            rowHeight={30}
            className= {"layout"}
            style={{width: "100%", minHeight: "250px"}}
            isResizable={editMode}
            isDraggable={editMode}
          >
            {
              items.map(item => 
                  <GridLayoutItemWrapper key={item.key} id={item.key} className={clsx(classes.elementWrapper, editMode && classes.elementWrapperEditModeStyle)}
                  >
                    {item.render(item.props)}
                  </GridLayoutItemWrapper>
              )
            }
          </ReactGridLayout>}
    </Card>
  )
}


export default ItemLayout;

const AddLayoutElementDropdown : React.FC<{actions: UIUserAction[]}> = ({actions}) => {
  const items = actions.map(action => 
      ({
          id: action.id,
          title: action.title,
          onClick: action.handler
      })
  );

  if(!items.length) {
      return <span/>
  }

  return (
          <DropdownMenu
              handler={<span style={{fontSize: 30, color: "crimson", cursor: "pointer"}} title="Add layout element">
                  <AddIcon fontSize={"inherit"} color={"inherit"}/>
              </span>}
              items={items} />
  );
}



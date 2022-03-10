import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core/styles";

export const useItemBoxStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: "white",
        position: "relative",
        width: "100%",
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rootEditModeStyle: {
        borderRadius: 10,
        border: 'dashed 1px gray',
    }
}));

import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core/styles";

export const useLayoutBinderElementStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: "white",
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
}));

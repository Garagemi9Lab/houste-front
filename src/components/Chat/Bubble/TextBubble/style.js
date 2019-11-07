import { fade } from "@material-ui/core/styles";


export default theme => ({
    bubble: {
        marginTop: 15,
        maxWidth: '60%',
        minWidth: '10%',
        padding: 5,
        wordWrap: 'break-word'
    },
    applicationBubble: {
        marginLeft: 5,
        backgroundColor: theme.palette.primary.main,
        color: '#000',
        textAlign: 'left',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    clientBubble: {
        marginRight: 5,
        backgroundColor: fade(theme.palette.primary.main, 0.6),
        color: '#000',
        textAlign: 'left',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    }
})
import { createMuiTheme } from '@material-ui/core'

import { grey } from '@material-ui/core/colors'

export default createMuiTheme({
    palette: {
        primary: {
            main: '#fff'
        },
        secondary: grey
    }, typography: {
        useNextVariants: true
    }
})
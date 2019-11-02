import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import style from './style'
import PropTypes from 'prop-types'

class TextBubble extends Component {

    static propTypes = {
        message: PropTypes.object.isRequired
    }

    render() {

        const { classes, message } = this.props

        return (
            <div className={`${classes.bubble} ${classes[`${message.user}Bubble`]}`}>
                {message.value}
            </div>
        )
    }
}

export default withStyles(style)(TextBubble)
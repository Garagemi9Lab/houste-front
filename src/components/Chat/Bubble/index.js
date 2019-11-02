import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import styles from './style'
import TextBubble from './TextBubble'
import TypingBubble from './TypingBubble'

class Bubble extends Component {


    static propTypes = {
        message: PropTypes.object.isRequired
    }

    render() {

        const { classes, message } = this.props

        return (
            <div className={`${classes.holder} ${classes[`${message.user}Holder`]}`}>
                {this.getBubbleByType()}
            </div>
        )
    }

    getBubbleByType() {
        const { message } = this.props
        switch (message.type) {
            case 'text':
                return <TextBubble message={message} />
            case 'typing':
                return <TypingBubble />
            default:
                return <div>Message type is not supported yet!</div>
        }
    }
}

export default withStyles(styles)(Bubble)
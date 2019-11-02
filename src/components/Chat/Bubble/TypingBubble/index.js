import React, { Component } from 'react'
import style from './style'
import { withStyles } from '@material-ui/core'
import typingGif from '../../../../assets/imgs/typing.svg'

class TypingBubble extends Component {

    render() {

        const { classes } = this.props

        return (
            <div className={classes.bubble}>
                <img src={typingGif} alt='typing' className={classes.typingImg} />
            </div>
        )
    }

}

export default withStyles(style)(TypingBubble)

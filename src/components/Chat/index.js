import React, { Component } from 'react'
import style from './style'
import { withStyles, TextField, IconButton } from '@material-ui/core'
import { Send } from '@material-ui/icons'

class Chat extends Component {

    constructor(props) {
        super(props)
        this.messagesHolder = React.createRef()
        this.inputTextField = React.createRef()
    }

    state = {
        inputValue: ''
    }

    handleSubmit = e => {

        e.preventDefault()
        console.log('Form submitted')
    }

    handleInputChange = event => {
        let value = event.target.value
        this.setState({ inputValue: value })
    }

    render() {

        const { classes } = this.props

        return (
            <div className={classes.holder}>
                <div className={classes.messagesHolder} ref={this.messagesHolder}>
                    <div>test</div>
                </div>
                <div className={classes.footer}>
                    <form noValidate autoComplete="off" className={classes.footerHolder} onSubmit={this.handleSubmit}>
                        <TextField
                            id="input"
                            className={classes.inputHolder}
                            inputProps={{
                                className: classes.inputTextField
                            }}
                            value={this.state.inputValue}
                            margin="normal"
                            placeholder="Informe a sua mensagem"
                            onChange={this.handleInputChange}
                            disabled={false}
                            inputRef={this.inputTextField}
                        />
                        <IconButton color="primary" type="submit">
                            <Send />
                        </IconButton>
                    </form>
                </div>
            </div>
        )
    }

}

export default withStyles(style)(Chat)
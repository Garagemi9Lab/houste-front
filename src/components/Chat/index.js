import React, { Component } from 'react'
import style from './style'
import { withStyles, TextField, IconButton } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import Bubble from './Bubble'
import { connect } from 'react-redux'
import { sendMessage } from '../../actions/messagesAction'

class Chat extends Component {

    constructor(props) {
        super(props)
        this.messagesHolder = React.createRef()
        this.inputTextField = React.createRef()
    }

    state = {
        inputValue: ''
    }

    componentDidMount() {
        const { place } = this.props

        this.props.sendMessage({
            type: 'text',
            date: new Date().getTime(),
            user: 'application',
            value: 'Olá',
            firstMessage: true
        }, place)
    }


    handleSubmit = e => {
        e.preventDefault()
        const { place } = this.props
        let { inputValue } = this.state
        inputValue = inputValue.trim()
        if (inputValue !== '') {
            this.setState({ inputValue: '' })
            this.props.sendMessage({
                type: 'text',
                date: new Date().getTime(),
                user: 'client',
                value: inputValue
            }, place)
        }
    }

    componentDidUpdate() {
        if (this.messagesHolder.current.scrollTop !== this.messagesHolder.current.scrollHeight)
            this.messagesHolder.current.scrollTop = this.messagesHolder.current.scrollHeight
        if (this.inputTextField)
            this.inputTextField.current.focus()
    }

    handleInputChange = event => {
        let value = event.target.value
        this.setState({ inputValue: value })
    }

    render() {

        const { classes, messages } = this.props

        return (
            <div className={classes.holder}>
                <div className={classes.messagesHolder} ref={this.messagesHolder}>
                    {messages.history.map((message, index) => <Bubble key={index} message={message} />)}
                    {messages.values.map((message, index) => <Bubble key={index} message={message} />)}
                    {messages.isSending && (
                        <Bubble message={{ type: 'typing', user: 'application' }} />
                    )}
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
                            disabled={messages.isSending ? true : false}
                            inputRef={this.inputTextField}
                        />
                        <IconButton color="primary" type="submit"
                            disabled={messages.isSending ? true : false}
                        >
                            <Send />
                        </IconButton>
                    </form>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (messages) => {
    return {
        messages
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: (message, place) => dispatch(sendMessage(message, place))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(style)(Chat))
import * as LocalSesssion from '../utils/LocalSession'

import {
    SEND_MESSAGE_FAILURE,
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS
} from '../actions/messagesAction'

const initialMessagesState = {
    values: [],
    isSending: false,
    messageError: false,
    lastUpdate: 0,
    history: LocalSesssion.getSession('messages') || []
}

function messages(state = initialMessagesState, action) {

    switch (action.type) {

        case SEND_MESSAGE_REQUEST:
            return {
                ...state,
                isSending: true,
                messageError: false,
                error: null,
                values: action.message.firstMessage ?
                    [...state.values] : [...state.values, action.message]
            }
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                isSending: false,
                messageError: false,
                values: state.values.concat(action.messages)
            }
        case SEND_MESSAGE_FAILURE:
            return {
                ...state,
                isSending: false,
                messageError: true,
                error: action.error,
                values: [...state.values, {
                    type: 'text',
                    date: new Date().getTime(),
                    user: 'application',
                    value: action.error.detail
                }]
            }

        default:
            return state

    }
}

export default messages
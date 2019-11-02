import { env, headers } from '../config'
import ErrorHandler from './ErrorHandler';
import { getSession } from './LocalSession';


export const send = async (message, PLACE = '') => {
    let params = {}
    let context = {}
    try {
        context = getSession(`context`) || {}
        params = {
            context,
            message,
        }
    } catch (err) {
        throw new ErrorHandler(400).format()
    }

    console.log(params)
    console.log(env.API)
    return fetch(`${env.API}/api/v1/web/message/${PLACE}`, {
        headers,
        method: 'POST',
        body: JSON.stringify(params)
    }).then(res => {
        if (!res.ok) {
            throw new ErrorHandler(res.status).format()
        } else {
            return res.json()
        }
    }).catch(error => {
        console.log('Um erro ocorreu')
        console.log(error)
        throw new ErrorHandler(400).format()
    })
}
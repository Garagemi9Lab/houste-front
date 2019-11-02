import { errorDetail } from '../config'

export default class ErrorHandler {
    constructor(error = {}) {
        if (typeof error == 'number') {
            this.setErrorByStatus(error)
        } else {
            this.setError(error)
        }

    }

    setError(error) {
        this.error = true
        this.status = error.status || ''
        this.detail = error.detail || 'An error occurred, try again later.'

    }

    format() {
        return {
            error: this.error,
            status: this.status,
            detail: this.detail
        }
    }

    setErrorByStatus(status) {
        this.error = true
        this.status = status || ''
        this.detail = errorDetail(status)
    }
}
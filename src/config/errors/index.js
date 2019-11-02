
const errors = {
    default: 'An error occurred, try again later.'
}

export const _errorDetail = (status) => {
    return errors[status] || errors['default']
}
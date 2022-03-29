const ADD_USER = 'ADD_USER'

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_USER: return action.payload
        default: return state
    }
}
const addAction = (user) => {
    return{
        type: ADD_USER,
        payload: user
    }
}

export { reducer, addAction }
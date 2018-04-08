
export const loginModal = (state = {isOpen: false}, action) => {
    switch (action.type) {
        case 'TOGGLE-MODAL':
            return {...state,isOpen: action.status}
        default:
            return state
    }
}
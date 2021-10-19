
const profileReducer = ( state = {}, action ) => {
    switch( action.type ) {
        case  'FETCH_ACTIVE_USER':
            return action.payload;
        default:
            return state;
    }
}

export default profileReducer;
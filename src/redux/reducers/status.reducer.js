const statusReducer = ( state = {}, action ) => {
    switch( action.type ) {
        case  'TOGGLE_RIDER_STATUS':
            return action.payload;
        default:
            return state;
    }
}


export default statusReducer; 
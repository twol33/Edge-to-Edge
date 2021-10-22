const statusReducer = ( state = {}, action ) => {
    switch( action.type ) {
        case  'TOGGLE_STATUS':
            let riderStatus = true
            return {...state, riderStatus: !riderStatus};
        default:
            return state;
    }
}


export default statusReducer; 
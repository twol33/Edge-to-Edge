
const locationReducer = ( state = [{ resort: '' }], action ) => {
    switch( action.type ) {
        case  'PLACE_LOCATION':
            return action.payload;
        default:
            return state;
    }
}


export default locationReducer; 
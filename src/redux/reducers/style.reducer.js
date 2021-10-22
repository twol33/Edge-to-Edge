const styleReducer = ( state = {}, action ) => {
    switch( action.type ) {
        case  'TOGGLE_PARK':
            let parkStyle = true
            return {...state, park: !parkStyle};
        case  'TOGGLE_FREERIDE':
            let freeRideStyle = true
            return {...state, freeRide: !freeRideStyle};
        case  'TOGGLE_ALLMTN':
            let allMtnStyle = true
            return {...state, allMtn: !allMtnStyle};
        case  'TOGGLE_BACKCOUNTRY':
            let bcStyle = true
            return {...state, backCountry: !bcStyle};
        case 'PLACE_RIDE_STYLE':
            return action.payload;
        default:
            return state;
    }
}



export default styleReducer; 

const rideStyleReducer = ( state = { style: '' }, action ) => {
    if( action.type === 'SET_PARK') {
            return {...state, style: 'Park' };
    }else if (action.type === 'SET_FREERIDE') {
            return {...state, style: 'Free Ride'};
    }else if (action.type === 'SET_ALLMTN') {
            return {...state, style: 'All Mountain'};
    }else if (action.type === 'SET_BACKCOUNTRY') {
            return {...state, style: 'Back Country'};
    }
    return state;
}

export default rideStyleReducer;
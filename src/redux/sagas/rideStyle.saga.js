import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* setRideStyle(action) {
    try{
        console.log('this is the action', action.payload);
        yield axios.post('/api/style', action.payload)
        
        yield put({ type: 'GET_STATUS' })
    } catch ( error ) {
        console.log('error in setting user ride style');
        
    }
}

function* setFreeRideStyle(action) {
    try{
        console.log('this is the action', action.payload);
        yield axios.post('/api/style', action.payload)
        
        yield put({ type: 'GET_STATUS' })
    } catch ( error ) {
        console.log('error in setting user ride style');
        
    }
}

function* setAllMtnRideStyle(action) {
    try{
        console.log('this is the action', action.payload);
        yield axios.post('/api/style', action.payload)
        
        yield put({ type: 'GET_STATUS' })
    } catch ( error ) {
        console.log('error in setting user ride style');
        
    }
}

function* setBcRideStyle(action) {
    try{
        console.log('this is the action', action.payload);
        yield axios.post('/api/style', action.payload)
        
        yield put({ type: 'GET_STATUS' })
    } catch ( error ) {
        console.log('error in setting user ride style');
        
    }
}

function* rideStyleSaga() {
    yield takeLatest( 'SET_PARK', setRideStyle );
    yield takeLatest( 'SET_FREERIDE', setFreeRideStyle );
    yield takeLatest( 'SET_ALLMTN', setAllMtnRideStyle );
    yield takeLatest( 'SET_BACKCOUNTRY', setBcRideStyle );
}

export default rideStyleSaga;
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* togglePark(action) {
    let parkStyle = action.payload
    console.log('setting style as park', parkStyle);

    
    if( parkStyle.park === true ) {
        console.log('riding park today');
        
        try{
            yield axios.put(`/api/ridingstyle/${parkStyle.id}`, { params: false })
            yield put({ type: 'SET_STYLE' })
        }catch ( error ) {
            console.log('error in toggle status', error);
        }
    }else {
        console.log('not riding park today');
        
        try{
            yield axios.put(`/api/ridingstyle/${parkStyle.id}`, { params: true })
            yield put({ type: 'SET_STYLE' })
        }catch ( error ) {
            console.log('error in toggle status', error);
        }
    }
}

function* fetchRideStyle(){
    try{
        const ridingStyle = yield axios.get('/api/ridingstyle')
        console.log('riding styles', ridingStyle);
        yield put ({ type: 'PLACE_RIDE_STYLE', payload: ridingStyle.data })
    }catch ( error ) {
        console.log('error in getting user riding style', error);
        
    }

}

function* styleSaga(){
    yield takeLatest( 'SET_PARK', togglePark);
    yield takeLatest( 'FETCH_STYLE', fetchRideStyle)
}

export default styleSaga;
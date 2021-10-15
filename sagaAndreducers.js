const sagaMiddleware = createSagaMiddleware();

function* fetchBio() {
    try{
        const bioResponse = yield axios.get('/')
        yield put({ type: 'FETCH_BIO', payload: bioResponse.data })
    } catch ( error ) {
        console.log('error in fetchBio');
        alert('Unable to fetch bio data')        
    }
  }
  
  function* rootSaga() {
    yield takeLatest( 'FETCH_BIO', fetchBio );
  
  }
  
  const infoBio = ( state = {}, action ) => {
    switch (action.type) {
      case 'SET_BIO':
        return action.payload;
    }
    return state;
  }
  
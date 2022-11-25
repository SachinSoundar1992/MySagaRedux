import { call, put, takeEvery } from 'redux-saga/effects'
import {GET_USERS_FETCH,GET_USERS_SUCCESS} from '../Actions/actions'
import axios from 'axios';

function usersFetch(){
  return axios.get('https://jsonplaceholder.typicode.com/photos')
  .then(response =>{
      return response.data

  });
  
  // return fetch('https://jsonplaceholder.typicode.com/photos').then(response => {
  //   console.log("Fetch response",response);
  //   return response.json();
  // });

}


function* workGetUsersFetch(){
    const users = yield call(usersFetch);
    yield put ({type: GET_USERS_SUCCESS, users})
}

function* mySaga()
{
    yield takeEvery (GET_USERS_FETCH,workGetUsersFetch);
    
}

export default mySaga;
/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { Alert } from 'react-native';
// import loginUser from 'app/api/methods/loginUser';
import * as contentsActions from 'app/actions/contentsActions';
import * as navigationActions from 'app/actions/navigationActions';
import  Api from 'app/api';

// Our worker Saga that logins the user
export default function* fetchContents(action) {
    //how to call api
    const response = yield call(Api, action.pageNum);
     if (response) {
         console.log("Response: ",response);
         
         yield put(contentsActions.contentsRequestResponse(response));
     }else{
        yield put(contentsActions.contentsRequestFailed());
     } 
}

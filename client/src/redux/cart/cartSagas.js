import {takeLatest,call,all,put} from "redux-saga/effects"

import userTypes from "../user/userTypes"

import {emptyCart} from "./cartActions"

function* emptyCartonSignout() 
{
    yield put(emptyCart())
}

export function* emptyCartStart() 
{
    yield takeLatest(userTypes.signoutSuccess,emptyCartonSignout)
}

export function* cartSagas()
{
    yield all([call(emptyCartStart)])
}



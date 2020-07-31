import {takeLatest,call,put,all} from "redux-saga/effects"

import shopTypes from "./shopTypes"

import {firestore,convertCollectionSnapshotToMap} from "../../firebase/firebaseUtils"

import {fetchCollectionsSuccess,fetchCollectionsFailure} from "./shopActions"

function* fetchCollectionsAsync() {
    console.log('Saga fired')
    try 
    {
        const collectionsRef = yield firestore.collection("collections")
        const collectionsSnapshot = yield collectionsRef.get()
        const  collectionsMap = yield call(convertCollectionSnapshotToMap,collectionsSnapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    }
    catch(err)
    {
        yield put(fetchCollectionsFailure(err))
    }
}

export function* fetchCollectionsStart(){
    yield takeLatest(shopTypes.fetchCollectionsStart,fetchCollectionsAsync)
}

export function* shopSagas()
{
    yield all([call(fetchCollectionsStart)])
}
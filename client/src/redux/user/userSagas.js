import {call,put,takeLatest,all} from "redux-saga/effects"

import userTypes from "./userTypes"
import {signinSuccess,
        signinFailure,
        signoutSuccess,
        signoutFailure,
        signupSuccess,
        signupFailure} from "./userActions"

import {auth,googleProvider,createUserProfileDocument,isUserAuthenicated} from "../../firebase/firebaseUtils"

function* getUserReference(userObject) {
    try
    {
        const userRef = yield call(createUserProfileDocument,userObject)
        const userSnapshot = yield userRef.get()
        yield put(signinSuccess({id : userSnapshot.id , ...userSnapshot.data()}))
    }
    catch(error)
    {
        yield put(signinFailure(error))
    }
}

function* checkUserSession() {
    try
    {
        const userAuth = yield isUserAuthenicated()
        if(!userAuth) return
        yield getUserReference(userAuth)
    }
    catch(error)
    {  
        yield put(signinFailure(error))
    }
    
}

function* signout()
{
    try
    {
        yield auth.signOut()
        yield put(signoutSuccess())
    } 
    catch(error)
    {
        yield put(signoutFailure(error))
    }
}

function* googleSignin() 
{
    try
    {
        const {user} = yield auth.signInWithPopup(googleProvider)
        yield getUserReference(user)
    }
    catch(error)
    {
        yield put(signinFailure(error))
    }
        
}

function* emailSignin({payload : {email,password}}) 
{
    try
    {
        const {user} = yield auth.signInWithEmailAndPassword(email,password)
        yield getUserReference(user)
    }
    catch(error)
    {
        yield put(signinFailure(error))
    }
}

function* signup({payload : {displayName,email,password}})
{   
    try
    {
        console.log("inside function")
        const {user} = yield auth.createUserWithEmailAndPassword(email,password)
        console.log(user)
        const userRef = yield call(createUserProfileDocument,user,{displayName})
        console.log(userRef)
        const userSnapshot = yield userRef.get()
        console.log(userSnapshot.data())
        yield put(signupSuccess({id : userSnapshot.id , ...userSnapshot.data()}))
    }  
    catch(error)
    {
        yield put(signupFailure(error))
    }
}


export function* emailSigninStart () 
{
    yield takeLatest(userTypes.emailSigninStart,emailSignin)
}

export function* googleSigninStart() 
{
    yield takeLatest(userTypes.googleSigninStart,googleSignin)
}

export function* checkUserSessionStart()
{
    yield takeLatest(userTypes.checkUserSessionStart,checkUserSession)
}

export function* signoutStart() 
{
    yield takeLatest(userTypes.signoutStart,signout)
}

export function* signupStart() 
{
    yield takeLatest(userTypes.signupStart,signup)
}

export function* userSagas() 
{
    yield all([call(googleSigninStart),
                call(emailSigninStart),
                call(checkUserSessionStart),
                call(signoutStart),
                call(signupStart)])
}


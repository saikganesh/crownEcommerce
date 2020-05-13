import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyABw6UfonitNRudWnReTcWXNB1ujMKfs3E",
    authDomain: "ecommercedb-3d801.firebaseapp.com",
    databaseURL: "https://ecommercedb-3d801.firebaseio.com",
    projectId: "ecommercedb-3d801",
    storageBucket: "ecommercedb-3d801.appspot.com",
    messagingSenderId: "632042335563",
    appId: "1:632042335563:web:2736169164b09186ed8cce",
    measurementId: "G-78JSLT42NF"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const isUserAuthenicated = () => {
 return new Promise((resolve,reject) => {
   const unsubscribe = auth.onAuthStateChanged(userAuth => {
     unsubscribe()
     resolve(userAuth)
   },error => reject(error))
 })
}


export const createUserProfileDocument = async (userAuth,additionalData) => {
  if(userAuth === null) return ;
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  
  let snapShot = await userRef.get()
  if(!snapShot.exists)
  {
    const {displayName , email } = userAuth
    const createdAt = new Date()

    try
    {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(err)
    {
      console.log("error creating user",err.message)
    }
    }
    return userRef
}


export const convertCollectionSnapshotToMap = (collection) => {
  const transformedCollection = collection.docs.map(doc => {
    const {title,items} = doc.data() 
    

    return {
      id : doc.id,
      title,
      route : encodeURI(`shop/${title.toLowerCase()}`),
      items
    }
  })

  return transformedCollection.reduce((acc,collection)=>{
    acc[collection.title.toLowerCase()]=collection
    return acc
  },{})

}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt : "select_account"});


export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
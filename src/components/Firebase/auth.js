import { auth, firestore } from "./firebase"
import { Store } from "../store/Store";

export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const doSignOut = () =>
  auth.signOut();

export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);

export const getUser = () =>
  auth.currentUser;

export const getUserName = () => {
  let user = firestore.collection("users").doc(getUser().uid)
  user.get()
    .then((snapshot) => {
      //CREATE JAVASCRIPT OBJECT
      const data = snapshot.data()
      const username = data.username
      //QUERY OBJECT FOR USERNAME
      console.log("Auth Username = " + username)
      Store.set({ ["username"]: username })
      return username
    })
    .catch((error) =>
      console.log("error =" + error))
}

export const testUserName = () => {
  let user = firestore.collection("users").doc(getUser().uid)
  return user.get().data().username
}
import { firestore } from "./firebase";

export const doCreateUser = (id, u, e) =>
    firestore.collection("users").doc(id).set({
        username: u,
        email: e
    })


//TODO: Save additional user information

//TODO: Save results

export const saveResult = (id, date, counter, termtips, termtotal, diff) => {
    let userid = id.uid;
    console.log(userid)
    let useremail = id.email;
    firestore.collection("results").doc(userid).collection(userid).doc(date).set({
        CounterTotal: counter,
        TerminalTips: termtips,
        TerminalTotal: termtotal,
        Difference: diff,
        User: useremail
    })
    console.log("Result Saved")
}
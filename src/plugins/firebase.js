import firebase from "firebase/compat/app";
import "firebase/compat/database";

// ค่า minimum configuration คือ apiKey และ databaseURL
const config = {
  apiKey: "AIzaSyAaapgKQZgr7K9WvZwWqggONa4kAdvAFJM",
  authDomain: "flighthub2-ae73b.firebaseapp.com",
  databaseURL:
    "https://flighthub2-ae73b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "flighthub2-ae73b",
  storageBucket: "flighthub2-ae73b.appspot.com",
  messagingSenderId: "931965137444",
  appId: "1:931965137444:web:171b3420619ff10935deb1",
  measurementId: "G-EQ94FH1PMS",
};

// คืนค่า firebase application ที่อาจถูก instantiate แล้วหรือ instantiate ใหม่
export default firebase.apps[0] || firebase.initializeApp(config);

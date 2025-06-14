
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';


const FB_GAMECONFIG = {
    apiKey: "AIzaSyBXnJbWcqld7Wwg4bfc5CmLV9LDhxwVSAI",
    authDomain: "comp-2025-aston-noble.firebaseapp.com",
    projectId: "comp-2025-aston-noble",
    storageBucket: "comp-2025-aston-noble.firebasestorage.app",
    messagingSenderId: "936615098052",
    appId: "1:936615098052:web:35756cde6e8a4e9ac6fb91",
    measurementId: "G-K6HXDNE2S4"
  };
  
import dsd from "./n.mjs"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref,get, update, query,  orderByChild, limitToFirst} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

window.addEventListener('DOMContentLoaded', () => {
    fb_initialise();
    if (JSON.parse(localStorage.getItem("userDetails")) != (undefined || null)) {
        //localStorage.setItem("userDetails",null)
        userDetails = JSON.parse(localStorage.getItem("userDetails"));
        console.log(userDetails);
        pfp.setAttribute("src",userDetails.pfp);
    } else {
        console.log("no user");
    }
  });

window.fb_initialise = fb_initialise;
window.account = account;
window.admin = admin;
window.state = state;

function fb_initialise() {
    const thing = new dsd();
    thing.greet();

    console.log('%c fb_initialise(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    const FB_GAMEAPP = initializeApp(FB_GAMECONFIG);
    const FB_GAMEDB  = getDatabase(FB_GAMEAPP);
    console.info(FB_GAMEDB); 
    
}
            var userDetails = null
            function admin() {
                localStorage.setItem("userDetails",null);
                window.location.href = "./admin.html";
            }
            function account() {
                if (JSON.parse(localStorage.getItem("userDetails")) != null) {
                     
                    alert(userDetails.username + " is already logged in");
                } else {
                    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();
     //The following makes Google ask the user to select the account
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });
    signInWithPopup(AUTH, PROVIDER).then((result) => {
    console.log(result.user)
    userDetails = {
        uid:result.user.uid,
        username:result.user.displayName,
        email:result.user.email,
        pfp:result.user.photoURL,
        DD_scores: "00000"

    }
    localStorage.setItem("userDetails",JSON.stringify(userDetails));
    pfp.setAttribute("src",userDetails.pfp);
        
    get(ref(getDatabase() , "/users/" + userDetails.uid)).then((snapshot) => {
        if (snapshot.val() == null) {
    update(ref(getDatabase() , "/users/" + userDetails.uid + "/"), userDetails).then(() => {
        console.log("✅ Code for a successful write goes here")
        
   

    }).catch((error) => {
        console.log("❌ Code for a write error goes here")
     });
    } else {
        get(ref(getDatabase() , "/users/" + userDetails.uid + "/DD_scores")).then((snapshot) => {
            userDetails.DD_scores = snapshot.val()
    }).catch((error) => {
        console.log("read error on score " + error)
     });
    }
}).catch((error) => {
        console.log(" ❌ Code for an authentication error goes here " + error)
    });
    })
    .catch((error) => {
        console.log(" ❌ Code for an authentication error goes here " + error)
    });
                }
            }


            function state() {
            
                const AUTH = getAuth();

console.log(user)
    onAuthStateChanged(AUTH, (user) => {

        if (user) {
console.log(user)
            console.log("✅ Code for user logged in goes here")

        } else {

            console.log("❌ Code for user logged out goes here")

        }

    }, (error) => {

        console.log(" ❌ Code for an authentication error goes here " + error)

    });
            }
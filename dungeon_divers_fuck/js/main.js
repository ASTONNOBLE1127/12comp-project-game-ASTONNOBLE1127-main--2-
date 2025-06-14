//export { fb_initialise };
export { logon }
let uidd = 0

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
  

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref,get, update, query,  orderByChild, limitToFirst} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

function fb_initialise() {
    console.log('%c fb_initialise(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    const FB_GAMEAPP = initializeApp(FB_GAMECONFIG);
    const FB_GAMEDB  = getDatabase(FB_GAMEAPP);
    console.info(FB_GAMEDB); 
    
}


  window.addEventListener('DOMContentLoaded', () => {
    fb_initialise();
   // logon()
  });
window.updateScore = updateScore
window.logon = logon 
window.starCount = starCount
 function logon() {
    
    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();
     //The following makes Google ask the user to select the account
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });
    signInWithPopup(AUTH, PROVIDER).then((result) => {
    console.log(result.user)
    uidd = {
        uid:result.user.uid,
        username:result.user.displayName,
        email:result.user.email,
        phot:result.user.photoURL,
        DD_scores: "00000"

    }
    window.uidd = uidd
    
        pfp.image = uidd.phot
        pfp.image.scale = 0.75
    get(ref(getDatabase() , "/users/" + uidd.uid)).then((snapshot) => {
        if (snapshot.val() == null) {
    update(ref(getDatabase() , "/users/" + uidd.uid + "/"), uidd).then(() => {
        console.log("✅ Code for a successful write goes here")
        
   

    }).catch((error) => {
        console.log("❌ Code for a write error goes here")
     });
    } else {
        get(ref(getDatabase() , "/users/" + uidd.uid + "/DD_scores")).then((snapshot) => {
            uidd.DD_scores = snapshot.val()
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

        function updateScore(stars,level) {
            stars = String(stars)
            get(ref(getDatabase() , "/users/" + uidd.uid + "/DD_scores")).then((snapshot) => {
                if (snapshot.val() != null) {
                    var fb_data = snapshot.val()
                    console.log(fb_data)
                                uidd.scores = {DD_scores: fb_data.slice(0,level) + stars + fb_data.slice(level + 1, fb_data.length)}
            update(ref(getDatabase() , "/users/" + uidd.uid + "/"), uidd.scores).then(() => {
                console.log("✅ Code for a successful write goes here")
                
           
        
            }).catch((error) => {
                console.log("❌ Code for a write error goes here")
             });


                } else {
                    console.log("no data")
                }
            }).catch((error) => {
                console.log("read error on score " + error)
             });

        }

        function starCount() {
            for (let i = 0; i < uidd.DD_scores.length; i++) {
               let slice = uidd.DD_scores.slice(i,i+1)
               scoreTotal[i] = Number(slice)
            }
        }

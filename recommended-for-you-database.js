// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getDatabase, push, set, child, ref, get } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
    apiKey: "AIzaSyBt4-LVF7xKxTwikKpC9yLJBenseKAxHDE",
    authDomain: "gonuts-72dac.firebaseapp.com",
    databaseURL: "https://gonuts-72dac-default-rtdb.firebaseio.com",
    projectId: "gonuts-72dac",
    storageBucket: "gonuts-72dac.appspot.com",
    messagingSenderId: "404913920306",
    appId: "1:404913920306:web:c879619d1504e2c4cd9f2b",
    measurementId: "G-MWD8EC268M"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const dbRef = ref(getDatabase(firebase));
window.addEventListener("load", function() {

    // rank 1

    recCoverImageUrl1();
    recSongName1();
    recArtistName1();

    function recCoverImageUrl1() {
        get(child(dbRef, `/recommendedForYou/rank1/coverImageUrl`)).then((snapshot) => {
            if (snapshot.exists()) {
                var msg = snapshot.val();
                recommendForYouSongImg1.src = msg;
            } else {
                recommendForYouSongImg1.src = "./assets/icon/unknown-icon.png";
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    function recSongName1() {
        get(child(dbRef, `/recommendedForYou/rank1/songName`)).then((snapshot) => {
            if (snapshot.exists()) {
                var msg = snapshot.val();
                recommendForYouSongsSongName1.innerHTML = msg;
            } else {
                recommendForYouSongsSongName1.innerHTML = "Unknown";
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    function recArtistName1() {
        get(child(dbRef, `/recommendedForYou/rank1/artistName`)).then((snapshot) => {
            if (snapshot.exists()) {
                var msg = snapshot.val();
                recommendForYouSongsArtistName1.innerHTML = msg;
            } else {
                recommendForYouSongsArtistName1.innerHTML = "Unknown";
            }
        }).catch((error) => {
            console.error(error);
        });
    }



    recCoverImageUrl2();
    recSongName2();
    recArtistName2();

    function recCoverImageUrl2() {
        get(child(dbRef, `/recommendedForYou/rank2/coverImageUrl`)).then((snapshot) => {
            if (snapshot.exists()) {
                var msg = snapshot.val();
                recommendForYouSongImg2.src = msg;
            } else {
                recommendForYouSongImg2.src = "./assets/icon/unknown-icon.png";
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    function recSongName2() {
        get(child(dbRef, `/recommendedForYou/rank2/songName`)).then((snapshot) => {
            if (snapshot.exists()) {
                var msg = snapshot.val();
                recommendForYouSongsSongName2.innerHTML = msg;
            } else {
                recommendForYouSongsSongName2.innerHTML = "Unknown";
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    function recArtistName2() {
        get(child(dbRef, `/recommendedForYou/rank2/artistName`)).then((snapshot) => {
            if (snapshot.exists()) {
                var msg = snapshot.val();
                recommendForYouSongsArtistName2.innerHTML = msg;
            } else {
                recommendForYouSongsArtistName2.innerHTML = "Unknown";
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    recCoverImageUrl3();
    recSongName3();
    recArtistName3();

    function recCoverImageUrl3() {
        get(child(dbRef, `/recommendedForYou/rank3/coverImageUrl`)).then((snapshot) => {
            if (snapshot.exists()) {
                var msg = snapshot.val();
                recommendForYouSongImg3.src = msg;
            } else {
                recommendForYouSongImg3.src = "./assets/icon/unknown-icon.png";
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    function recSongName3() {
        get(child(dbRef, `/recommendedForYou/rank3/songName`)).then((snapshot) => {
            if (snapshot.exists()) {
                var msg = snapshot.val();
                recommendForYouSongsSongName3.innerHTML = msg;
            } else {
                recommendForYouSongsSongName3.innerHTML = "Unknown";
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    function recArtistName3() {
        get(child(dbRef, `/recommendedForYou/rank3/artistName`)).then((snapshot) => {
            if (snapshot.exists()) {
                var msg = snapshot.val();
                recommendForYouSongsArtistName3.innerHTML = msg;
            } else {
                recommendForYouSongsArtistName3.innerHTML = "Unknown";
            }
        }).catch((error) => {
            console.error(error);
        });
    }



    recCoverImageUrl4();
    recSongName4();
    recArtistName4();

    function recCoverImageUrl4() {
        get(child(dbRef, `/recommendedForYou/rank4/coverImageUrl`)).then((snapshot) => {
            if (snapshot.exists()) {
                var msg = snapshot.val();
                recommendForYouSongImg4.src = msg;
            } else {
                recommendForYouSongImg4.src = "./assets/icon/unknown-icon.png";
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    function recSongName4() {
        get(child(dbRef, `/recommendedForYou/rank4/songName`)).then((snapshot) => {
            if (snapshot.exists()) {
                var msg = snapshot.val();
                recommendForYouSongsSongName4.innerHTML = msg;
            } else {
                recommendForYouSongsSongName4.innerHTML = "Unknown";
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    function recArtistName4() {
        get(child(dbRef, `/recommendedForYou/rank4/artistName`)).then((snapshot) => {
            if (snapshot.exists()) {
                var msg = snapshot.val();
                recommendForYouSongsArtistName4.innerHTML = msg;
            } else {
                recommendForYouSongsArtistName4.innerHTML = "Unknown";
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    recCoverImageUrl5();
    recSongName5();
    recArtistName5();

    function recCoverImageUrl5() {
        get(child(dbRef, `/recommendedForYou/rank5/coverImageUrl`)).then((snapshot) => {
            if (snapshot.exists()) {
                var msg = snapshot.val();
                recommendForYouSongImg5.src = msg;
            } else {
                recommendForYouSongImg5.src = "./assets/icon/unknown-icon.png";
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    function recSongName5() {
        get(child(dbRef, `/recommendedForYou/rank5/songName`)).then((snapshot) => {
            if (snapshot.exists()) {
                var msg = snapshot.val();
                recommendForYouSongsSongName5.innerHTML = msg;
            } else {
                recommendForYouSongsSongName5.innerHTML = "Unknown";
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    function recArtistName5() {
        get(child(dbRef, `/recommendedForYou/rank5/artistName`)).then((snapshot) => {
            if (snapshot.exists()) {
                var msg = snapshot.val();
                recommendForYouSongsArtistName5.innerHTML = msg;
            } else {
                recommendForYouSongsArtistName5.innerHTML = "Unknown";
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    recCoverImageUrl6();
    recSongName6();
    recArtistName6();

    function recCoverImageUrl6() {
        get(child(dbRef, `/recommendedForYou/rank6/coverImageUrl`)).then((snapshot) => {
            if (snapshot.exists()) {
                var msg = snapshot.val();
                recommendForYouSongImg6.src = msg;
            } else {
                recommendForYouSongImg6.src = "./assets/icon/unknown-icon.png";
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    function recSongName6() {
        get(child(dbRef, `/recommendedForYou/rank6/songName`)).then((snapshot) => {
            if (snapshot.exists()) {
                var msg = snapshot.val();
                recommendForYouSongsSongName6.innerHTML = msg;
            } else {
                recommendForYouSongsSongName6.innerHTML = "Unknown";
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    function recArtistName6() {
        get(child(dbRef, `/recommendedForYou/rank6/artistName`)).then((snapshot) => {
            if (snapshot.exists()) {
                var msg = snapshot.val();
                recommendForYouSongsArtistName6.innerHTML = msg;
            } else {
                recommendForYouSongsArtistName6.innerHTML = "Unknown";
            }
        }).catch((error) => {
            console.error(error);
        });
    }

});
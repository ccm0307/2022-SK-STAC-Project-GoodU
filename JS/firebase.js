const firebaseConfig = {
  apiKey: "AIzaSyB688FRjdT9kWdiZ6jBuQ1a29AcW81lWBw",
  authDomain: "goodu-f6bfa.firebaseapp.com",
  projectId: "goodu-f6bfa",
  storageBucket: "goodu-f6bfa.appspot.com",
  messagingSenderId: "513922668749",
  appId: "1:513922668749:web:8a4dee0f6637a91acc3184",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

$(document).ready(function ($) {
  // 로그인 콜백
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      userLogin = true;
      console.log(user);
      $(".profile_name").html(user.displayName); // 이름 영역에 유저이름 띄우기
      userName = user.displayName;
      userEmail = user.email;
      userDoc = user.uid;
      console.log(userDoc); // 특정 user document 읽어오기
    } else {
      userLogin = false;
      console.log("not login");
      $(".profile_name").text("");
    }
  });
});

/**
 * 로그아웃
 */
function gLogOut() {
  firebase
    .auth()
    .signOut()
    .then(
      function () {
        console.log("LogOut Success");
      },
      function (error) {
        console.log("logOut Failed");
      }
    );
}

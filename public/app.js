const auth = firebase.auth();


const provider = new firebase.auth.GoogleAuthProvider();


const profileImg = document.getElementById('profile-image');
const userDetails = document.getElementById('user-details');


const signedIn = document.getElementById('signed-in');
const signedOut = document.getElementById('signed-out');


const signInButton = document.getElementById('sign-in-button');
const signOutButton = document.getElementById('sign-out-button');


signInButton.onclick = () => auth.signInWithPopup(provider);
signOutButton.onclick = () => auth.signOut();


auth.onAuthStateChanged(user => {

  if (user) {

    // signed in
    signedIn.hidden = false;
    signedOut.hidden = true;


    userDetails.innerHTML = `
      <h4 class="text-light">name</h4>
      <h3 class="card-title text-warning">${user.displayName}</h3>
      <hr>
      <h4 class="text-light">email</h4>
      <h5 class="text-warning">${user.email}</h5>
      <hr>
      <h4 class="text-light">last sign in</h4>
      <h5 class="text-warning">${user.metadata.lastSignInTime}</h5>`;

    profileImg.innerHTML =`<img class="profile-img" src=${user.photoURL}>`;

  } else {
    
    // Not signed in
    signedIn.hidden = true;
    signedOut.hidden = false;
    userDetails.innerHTML, profileImg.innerHTML = '';
  }
});



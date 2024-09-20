import {
  auth,
  signInWithEmailAndPassword,
} from "./firebase.js"; // Adjust the import path if needed

const email = document.getElementById("username");
const password = document.getElementById("password");

const loginHandler = async () => {
  try {
    const userSignup = await signInWithEmailAndPassword(auth, email.value, password.value);
    const uid = userSignup.user.uid;
    localStorage.setItem("uid", uid);
    alert("User logged in!");
    window.location.href = 'blog.html'; 
  } catch (error) {
    alert(error.message);
  }
};

// Make it global
window.loginHandler = loginHandler;

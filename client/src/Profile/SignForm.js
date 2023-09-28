import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./SignForm.module.css";
import GoogleButton from "react-google-button";

import axios from "axios";
const SignForm = () => {
  const [signIn, setSignIn] = useState(true);


  const signInWithEmailHandler = (event) => {
    event.preventDefault();
    console.log(event.target.elements.email.value, event.target.elements.password.value);

  }
  const signUpWithEmailHandler = async (event) => {
    event.preventDefault();
    const userEmail = event.target.elements.email.value;
    const userPass = event.target.elements.pass.value;
    const userName= event.target.elements.name.value;
    const user = {
      email: userEmail,
      pass: userPass,
      name: userName,
    }
    const userSignUp = await axios.post('https://localhost:8000/user/saveuseremail',user)
    console.log(userSignUp)
  }
  const signUserUpHandlerGoogle = async () => {
    window.open(
        `${process.env.REACT_APP_API_URL}/auth/google/callback`,
        "_self"
      );
  }
  return (
    <div className={styles.signInForm}>
      <div className={styles.formControls}>
        <button
          onClick={() => setSignIn(true)}
          style={{ color: signIn ? "orange" : "white" }}>
          SIGN IN
        </button>
        <button
          onClick={() => setSignIn(false)}
          style={{ color: !signIn ? "orange" : "white" }}>
          SIGN UP
        </button>
      </div>
      {signIn ? (
        <form className={styles.form} onSubmit={signInWithEmailHandler}>
          <div className={styles.formInput}>
            <div className={styles.nameInput}>
              <input type="text" placeholder="Email" name="email"/>
            </div>
            <div className={styles.passwordInput}>
              <input type="password" placeholder="Password" name="password"/>
            </div>
          </div>

          <div className={styles.forget}>
            <Link to="/passreset">Forgot password?</Link>
          </div>

          <div className={styles.submission}>
            <button type="submit">SIGN IN</button>
          </div>
        </form>
      ) : (
        <form className={styles.formUp} onSubmit={signUpWithEmailHandler}>
          <div className={styles.formInput}>
            <div className={styles.nameInput}>
              <input type="text" placeholder="Email" name="email" />
            </div>
            <div className={styles.nameInput}>
              <input type="text" placeholder="Name/Surname" name="name"/>
            </div>
            <div className={styles.passwordInput}>
              <input type="password" placeholder="Password" name="pass"/>
            </div>
          </div>
          <div className={styles.submission}>
            <button type="submit">SIGN UP</button>
          </div>
        </form>
      )}

      <div>OR</div>
      <div className={styles.socials}>
        <GoogleButton className={styles.goog} type="light" label={signIn ? "Sign In With Google" : "Sign Up With Google"}  onClick={signUserUpHandlerGoogle} />
      </div>
    </div>
  );
};
export default SignForm;

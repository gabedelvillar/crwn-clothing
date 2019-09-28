import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SingUp from "../../components/sign-up/sing-up.component";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSingUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SingUp />
    </div>
  );
};

export default SignInAndSingUpPage;

import React from "react";

import SingUpForm from "../../components/Sing-Up-Form/SingUpForm";
import SingInForm from "../../components/Sing-In-Form/SingInForm";
import "./authentication.scss";

const Authentication = () => {
  return (
    <div className='auth-container'>
      <SingInForm />
      <SingUpForm />
    </div>
  );
};

export default Authentication;

import React, { useState } from "react";
import {
  creatUserDocumentFromAuth,
  signInWithGooglePopup,
  SingInAuthUserWhitEmailAndPwd,
} from "../../utils/firebase";

import FormInput from "../FormInput/FormInput";
import Btn from "../../components/Btn/Btn";
import "./SinginForm.scss";

const defaultFormField = {
  Email: "",
  Password: "",
};

const SingInForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { Email, Password } = formField;

  const SingInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await creatUserDocumentFromAuth(user);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  const submiHandler = async (event) => {
    event.preventDefault();

    try {
      const { user } = await SingInAuthUserWhitEmailAndPwd(Email, Password);
      setFormField(defaultFormField);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='sing-up-container'>
      <h2>Already have an account ?</h2>
      <span>Sing In</span>
      <form onSubmit={submiHandler}>
        <FormInput
          label='Email'
          type='email'
          required
          name='Email'
          value={Email}
          onChange={changeHandler}
        />

        <FormInput
          label='Password'
          type='password'
          required
          name='Password'
          value={Password}
          onChange={changeHandler}
        />
        <div className='btn-container'>
          <Btn type='submit'>Sing In</Btn>
          <Btn onClick={SingInWithGoogle} btnType='google'>
            Google Sing In
          </Btn>
        </div>
      </form>
    </div>
  );
};

export default SingInForm;

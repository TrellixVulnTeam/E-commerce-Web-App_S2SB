import { useState } from "react";
import {
  createAuthUserWhitEmailAndPwd,
  creatUserDocumentFromAuth,
} from "../../utils/firebase";

import FormInput from "../FormInput/FormInput";
import Btn from "../../components/Btn/Btn";
import "./SingUpForm.scss";

const defaultFormField = {
  displayName: "",
  Email: "",
  Password: "",
  ConfirmPassword: "",
};

const SingUpForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { displayName, Email, Password, ConfirmPassword } = formField;

  const submiHandler = async (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      alert("Password dosn't match");
      return;
    }

    try {
      const { user } = await createAuthUserWhitEmailAndPwd(Email, Password);
      await creatUserDocumentFromAuth(user, { displayName });
      setFormField(defaultFormField);
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className='sing-up-container'>
      <h2>Don't have an account ?</h2>
      <span>Sing Up</span>
      <form onSubmit={submiHandler}>
        <FormInput
          label='Dispalay Name'
          type='text'
          required
          name='displayName'
          value={displayName}
          onChange={changeHandler}
        />

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

        <FormInput
          label='Confirm Password'
          type='password'
          required
          name='ConfirmPassword'
          value={ConfirmPassword}
          onChange={changeHandler}
        />
        <Btn type='submit'>Sing Up</Btn>
      </form>
    </div>
  );
};

export default SingUpForm;

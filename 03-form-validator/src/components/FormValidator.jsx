import { useState } from "react";

const FormValidator = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const isEmailCorrect =
      email.indexOf("@") === email.lastIndexOf("@") && email.includes("@");

    const isPasswordLengthCorrect = password.length >= 8;
    const doPasswordsMatch = password === passwordConfirm;

    let errorMessage = "";
    if (!isEmailCorrect)
      errorMessage += "An email must have exactly one @ sign. ";
    if (!isPasswordLengthCorrect)
      errorMessage += "Password must be 8 symbols or longer. ";
    if (!doPasswordsMatch) errorMessage += "Passwords must be the same.";

    const isFormCorrect =
      isEmailCorrect && isPasswordLengthCorrect && doPasswordsMatch;

    if (isFormCorrect) {
      setSubmitMessage("User created!");
    } else {
      setSubmitMessage(errorMessage);
    }
  };

  return (
    <form>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirm Password </label>
      <input
        type="password"
        name="password-confirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <input
        type="submit"
        value="Submit"
        onClick={(event) => submitHandler(event)}
      />
      <h3>{submitMessage}</h3>
    </form>
  );
};

export default FormValidator;

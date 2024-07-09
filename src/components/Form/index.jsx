import { useState } from "react";
import "./style.css";

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from "../../utils/helpers";

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [selectedOption, setSelectedOption] = useState("Option A");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else if (inputType === "subject") {
      setSubject(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    // fix commented out for dev
    // if (!validateEmail(email) || !userName) {
    //   setErrorMessage('Email or username is invalid');
    //   // We want to exit out of this code block if something is wrong so that the user can correct it
    //   return;
    //   // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    // }
    // fix commented out for dev
    // if (!checkPassword(password)) {
    //   setErrorMessage(
    //     `Choose a more secure password for the account: ${userName}`
    //   );
    //   return;
    // }

    console.log(password, email, userName);
    alert(`Hello ${userName}`);

    // fix add email functionality
    // // Construct the mailto link
    // const mailtoLink = `mailto:${email}`;
    // const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=Hello ${userName},%0D%0A%0D%0ASelected Option: ${selectedOption}%0D%0A%0D%0A`;

    // Open default email client
    window.location.href = mailtoLink;

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");
    setPassword("");
    setEmail("");
    setSubject("");
  };

  return (
    <div className="container text-center">
      <h1>Hello {userName}</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          required
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
        <input
          value={subject}
          name="subject"
          onChange={handleInputChange}
          type="text"
          placeholder="Subject"
        />
        <label htmlFor="options">Select an option:</label>
        <select
          id="options"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="Option A">Option A</option>
          <option value="Option B">Option B</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;

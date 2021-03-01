import react from "react";

function Form() {
  return (
    <form>
      <label for="username">username:</label>
      <br></br>
      <input className="input" type="text" id="username" name="username" />
      <br></br>
      <label for="password">Password:</label>
      <br></br>
      <input className="input" type="password" id="password" name="password" />
      <br></br>
      <br></br>

      <button className="button" type="submit" className="button">
        Submit
      </button>
    </form>
  );
}

export default Form;

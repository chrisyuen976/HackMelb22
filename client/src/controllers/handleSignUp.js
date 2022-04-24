//SIGN UP
async function handleSignUp(username, password, callback) {
    // console.log(username);
    // console.log(password);
  
    const signUpResult = await fetch("/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const res = await signUpResult.json();
    // console.log(res);
  
    if (signUpResult.status === 201) {
      callback(res);
    }
  }

  export default handleSignUp;
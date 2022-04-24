
//LOGIN
async function handleLogin(username, password, callback) {
    // console.log(username);
    // console.log(password);
  
    const loginResult = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const res = await loginResult.json();
    // console.log(res);
  
    if (loginResult.status === 201) {
      callback(res);
    }
  }

export default handleLogin;
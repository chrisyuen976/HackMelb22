
async function logout(callback) {
    const response = await fetch("/auth/logout", {
      method: "POST",
    });
    const result = await response.json();
    console.log(result);
    if (response.status === 200) {
      callback(result);
    }
  }

  export default logout;
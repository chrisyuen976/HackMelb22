//GETS THE USER OF THE CURRENT SESSION
async function getUser(callback) {
    const response = await fetch("/user");
    const res = await response.json();
  
    if (response.status === 201) {
      callback(res);
    }
  }

  export default getUser;
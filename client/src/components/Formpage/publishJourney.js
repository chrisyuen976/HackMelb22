


async function publishJourney(title, milestones){
    
    const response = await fetch("/journey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        milestones:milestones,
        title:title,
      }),
    });
  
    const res = await response.json();
    console.log(res)
    return response.status >= 200 && response.status < 300
  }

  
  export default publishJourney;
async function editJourney(id, title, milestones){
    
    const response = await fetch("/journey/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        milestones,
        title
      }),
    });
  
    const res = await response.json();
    console.log(res);
  
  }
  

export default editJourney;
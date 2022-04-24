const getSavedJourneys = async (setJourneys) => {
    var res = [];
    const response = await fetch("/user/savedJourneys");
    const json = await response.json();
    console.log(json)
    if (response.status >= 400) {
      return;
    }
    Object.keys(json).map((data) => res.push(json[data]));
    setJourneys(res);
    return res;
  };

export default getSavedJourneys;
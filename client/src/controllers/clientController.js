


const getJourney = async (setJourney, id) => {
  console.log("called");
  const response = await fetch("/journey/" + id);
  const json = await response.json();
  console.log(json);
  setJourney(json);
};

export default getJourney
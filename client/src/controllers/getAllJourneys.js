const { ModalFocusScope } = require("@chakra-ui/react");

const getAllJourneys = async (setJourneys) => {
    var res = [];
    const response = await fetch("/journey");
    const json = await response.json();
    Object.keys(json).map((data) => res.push(json[data]));
    setJourneys(res);
};

export default getAllJourneys;
import React from "react";
import JourneyCardList from "../shared/JourneyCardList";
import LoggedHeader from "../shared/LoggedHeader";

const LoggedSavedJourneyPage = ({ username, journeyList, savedList }) => {
  // get my journey and saved journey
  var myJourneyList = [];
  var savedJourneyList = [];
  for (let i in journeyList) {
    if (journeyList[i].creator === username) {
      myJourneyList.push(journeyList[i]);
    }
    for (let saved in savedList) {
      if (journeyList[i].journey_id === savedList[saved].journey_id) {
        savedJourneyList.push(journeyList[i]);
        break;
      }
    }
  }

  return (
    <>
      <LoggedHeader username={username} />

      {/* Layout placed under header */}
      <div style={{ minWidth: "100vw", minHeight: `calc(100vh - 56px)` }}>
        <div
          style={{
            padding: "20px 24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: "0 auto",
            maxWidth: "1248px",
          }}
        >
          <div>
            <JourneyCardList
              style={{ display: "block" }}
              journeyList={savedJourneyList}
              savedList={savedList}
              listTitle="Saved Journeys"
            />

            <JourneyCardList
              style={{ display: "block" }}
              journeyList={myJourneyList}
              savedList={savedList}
              listTitle="My Journeys"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoggedSavedJourneyPage;

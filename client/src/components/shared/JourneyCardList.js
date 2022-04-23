import React from "react";
import JourneyCard from "./JourneyCard";
import { Card, Row, Col } from "react-bootstrap";

const JourneyCardList = ({ journeyList, savedList, listTitle }) => {
  console.log(journeyList);
  if (journeyList.length === 0) {
    return (
      <>
        <div style={{ marginBottom: "5px", marginLeft: "5px" }}>
          {listTitle}
        </div>
        <div style={{ marginBottom: "15px", marginTop: "10px" }}>
          <Card
            body
            style={{
              minWidth: "780px",
              maxWidth: "890px",
              width: "780px",
              height: "220px",
              backgroundColor: "#f8f9fa",
            }}
          >
            <Row>
              <Col
                style={{
                  fontWeight: "500",
                  color: "grey",
                  textAlign: "center",
                }}
              >
                There is no Journey saved. Add more!
              </Col>
            </Row>
          </Card>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div style={{ marginBottom: "5px", marginLeft: "5px" }}>
          {listTitle}
        </div>
        {journeyList.map((journey, index) => (
          <JourneyCard key={index} journey={journey} savedList={savedList} />
        ))}
      </>
    );
  }
};

export default JourneyCardList;

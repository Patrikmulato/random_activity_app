import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Activities = ({ boredData, isLoading, fetchData, saveData, newOne }) => {
  const { type, activity, participants, price } = boredData;
  return (
    <Row>
      <Col>
        <h5>You should:</h5>
        <p>{activity}</p>
        <button onClick={saveData}>Save for later</button>
      </Col>
      <Col>
        <h5>Activity details:</h5>
        <p>{type}</p>
        <p>{participants}</p>
        <p>{price}</p>

        <button onClick={newOne}>Hit me with the one!</button>
      </Col>
    </Row>
  );
};

export default Activities;

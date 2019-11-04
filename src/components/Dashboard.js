import React, { useState } from 'react';
import Mylist from './Mylist';
import Activities from './Activities';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Dashboard = ({
  boredData,
  isLoading,
  fetchData,
  saveData,
  newOne,
  listItems
}) => {
  const [key, setKey] = useState('activities');
  return (
    <Container>
      <Row>
        <Col>
          <Tabs
            id='controlled-tab-example'
            activeKey={key}
            onSelect={k => setKey(k)}
          >
            <Tab eventKey='activities' title='Activities'>
              <Activities
                boredData={boredData}
                fetchData={fetchData}
                saveData={saveData}
                newOne={newOne} /* isLoading={isLoading} */
              />
            </Tab>
            <Tab eventKey='mylist' title='Mylist'>
              <Mylist listItems={listItems} />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

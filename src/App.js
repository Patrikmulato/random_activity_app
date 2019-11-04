import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './components/Dashboard';
const listItems = [];

function App() {
  const [boredData, setBoredData] = useState([]);
  const { type, activity, participants, price } = boredData;
  let id = 0;
  // Fetching Data from boredapi
  const fetchData = async () => {
    const result = await axios('http://www.boredapi.com/api/activity/');
    setBoredData(result.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // Save button
  const saveData = () => {
    listItems.push({
      id,
      type,
      activity,
      participants,
      price
    });
    console.log(listItems);
  };
  console.log(listItems);
  // New activity button
  const newOne = () => {
    id++;
    fetchData();
  };
  return (
    <Dashboard
      boredData={boredData}
      fetchData={fetchData}
      saveData={saveData}
      newOne={newOne}
      listItems={listItems}
    />
  );
}

export default App;

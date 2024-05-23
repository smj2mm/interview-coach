import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


const App: React.FC = () => {
  const [data, setData] = useState<string>();

  const fetchData = async () => {
    const url = '/api/hello';
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <h1>Here's my app</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;

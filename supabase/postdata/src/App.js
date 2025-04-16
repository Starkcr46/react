
import './App.css';
import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [message, setMessage] = useState('');

  const handleLengthChange = (event) => {
    setLength(event.target.value);
  };
  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  async function postData() {
    const { data, error } = await supabase
      .from('reactTest')
      .insert([
        {length: length, width: width, height: height, message: message },
      ])
      .select();
  
    if (error) {
      console.error('Error inserting data:', error);
    } else {
   
      console.log('Data inserted successfully:', data);
      window.location.reload();
    }
  }

  useEffect(() => {

    async function fetchData() {
      try {
        const { data: items, error } = await supabase
          .from('reactTest')
          .select('*');

        if (error) {
          throw error;
        }
        setData(items);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">

    <input
        type="text"
        value={length}
         placeholder="Length"
         onChange={handleLengthChange}
      />
       <input
        type="text"
        value={width}
         placeholder="Width"
         onChange={handleWidthChange}
      />
       <input
        type="text"
        value={height}
         placeholder="Height"
         onChange={handleHeightChange}
      />
       <input
        type="text"
        value={message}
         placeholder="Message"
         onChange={handleMessageChange}
      />

      <table><tr><td><b>ID</b></td><td><b>Length</b></td><td><b>width</b></td><td><b>Height</b></td><td><b>Message</b></td></tr>
      {data.map(item => (

        <tr><td><li key={item.id}>{item.id}</li></td><td>{item.length}</td><td>{item.width}</td><td>{item.height}</td><td>{item.message}</td></tr>
      ))}
      </table>

      <button onClick={postData}>Insert</button>

    </div>
  );
}

export default App;

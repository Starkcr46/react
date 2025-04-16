
import './App.css';
import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {

    async function postData() {
      const { data, error } = await supabase
        .from('reactTest')
        .insert([
          {length: 5, width: 4, height: 9, message: "Test" },
        ])
        .select();
    
      if (error) {
        console.error('Error inserting data:', error);
      } else {
     
        console.log('Data inserted successfully:', data);
      }
    }
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

    postData();
    fetchData();

  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <table><tr><td><b>ID</b></td><td><b>Length</b></td><td><b>width</b></td><td><b>Height</b></td><td><b>Message</b></td></tr>
      {data.map(item => (

        <tr><td><li key={item.id}>{item.id}</li></td><td>{item.length}</td><td>{item.width}</td><td>{item.height}</td><td>{item.message}</td></tr>
      ))}
      </table>


    </div>
  );
}

export default App;

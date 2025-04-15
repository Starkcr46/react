import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: items, error } = await supabase
          .from('car_parts_monthly_sales')
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
      <table><tr><td><b>ID</b></td><td><b>Parts ID</b></td><td><b>Date</b></td><td><b>Volume</b></td></tr>
      {data.map(item => (

        <tr><td><li key={item.id}>{item.id}</li></td><td>{item.parts_id}</td><td>{item.date}</td><td>{item.volume}</td></tr>
      ))}
      </table>
    
    </div>
  );
}


export default App;

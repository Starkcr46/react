import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';


const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  async function fetchData() {
    try {
      const { data: items, error } = await supabase
        .from('your_table_name')
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

function App() {
  return (
    <ul>
    {data.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
  );
}

export default App;

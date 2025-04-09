import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (e) {

        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {data && (
        <ul>
          {data.map(item => (
           // <li key={item.id}>{item.name}</li>
           <li key={item.id}><b>Title:</b> {item.title}
           <br>
           </br>
           <b>Body:</b> {item.body}
           </li>
           
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyComponent;

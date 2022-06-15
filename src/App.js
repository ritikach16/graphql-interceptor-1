import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [data, setData] = useState(null);
   const [val, setVal] = useState('');
   const [fetchData, setFetchData] = useState(false);

   useEffect(() => {

      if (fetchData) {
         const payload = {
            method: 'POST',
            body: JSON.stringify({ title: val }),
         };
         axios.post('https://jsonplaceholder.typicode.com/users', payload)
.then((res) => setData(res.data.id));
      }
   }, [fetchData]);
  return (
    <>
    {data && <h1>My data = {data}</h1>}
    <input
       placeholder="Write your post"
       value={val}
       onChange={(e) => setVal(e.target.value)}
    />
    <button onClick={() => setFetchData(true)}>Save</button>
    </>
 );
}

export default App;
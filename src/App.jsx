import React, { useState } from 'react';
import data_array from './Components/datafile.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'; 
import './App.css'; 

function App() {
  const [data, setData] = useState([]);

  function fetchdata() {
    setData(data_array);
  }

  function cleardata() {
    setData([]);
  }

  return (
    <div className="container">
    <div className="fetchdata">
      <div className="buttons">
        <Button className="btn btn-primary mr-2" onClick={fetchdata}>Fetch Data</Button>
        <Button className="btn btn-danger ml-2" onClick={cleardata}>Clear Data</Button>
      </div>
      <div className="data">
        <table className="table">
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dataitem, index) => (
              <tr key={index}>
                <td>{dataitem.Rollno}</td>
                <td>{dataitem.Name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
            }
  
export default App;

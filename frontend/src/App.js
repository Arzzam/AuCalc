import { useState } from 'react';
import './App.css';
import axios from 'axios'

//  Aucalc
// was created

function App() {

    const [data, setData] = useState({});

    function fetchData(event) {
        
        axios.get('/api/degrees')
        .then((response) => {
            setData(response.data);
        }).catch((err) => {
            console.log(err);
        })
        event.preventDefault();
    }

    return (
        <div style={{textAlign: 'center', 'marginTop': '50px'}}>
            <p>{JSON.stringify(data)}</p>
            <button onClick={fetchData}>Get Data</button>
        </div>
    );
}

export default App;

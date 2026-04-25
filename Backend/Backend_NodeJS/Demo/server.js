const express = require('express');
const app = express();
const port = 3000;


//curl -X GET http://localhost:3000/

const handlerGet = (req, res) => {
    res.send({ 
        message: "Hello, World!"
        // url: req.url,
        // method: req.method
    });
}

// Define a route for GET requests to the root path
app.get('/', handlerGet);

// Define a route for POST requests to /submit

//curl -X POST http://localhost:3000/submit

const handlePost  = (req, res) => {
 res.send('Data submitted!');
}

app.post('/submit', handlePost);

function handleUpdate(req, res) {
 res.send('Data updated!');
}
app.put('/update', handleUpdate);


// Start the server
function serverOutput() {
 console.log(`Server running on http://localhost:${port}`);
}
app.listen(port, serverOutput);
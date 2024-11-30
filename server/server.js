import express from 'express';

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.status(200).send("Hello from New Jersey");
})

app.listen(PORT, (error) => {
    if(!error) {
        console.log("Server is running on Port:" + PORT);
    } else {
        console.log("Can not connect to server", error);
    }
});
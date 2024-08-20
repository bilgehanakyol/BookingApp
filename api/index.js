const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');

app.use(express.json);
app.use(cors(
    {
        credentials: true,
        origin: 'http://localhost:5173',
    }
));

mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req,res) => {
    res.json('testok');
});

app.post('/register', (req, res) => {
    const {name,email,password} = req.body;
    res.json({name,email,password});
})

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
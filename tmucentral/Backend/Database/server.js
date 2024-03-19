const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const connectDB = require('./connect');
connectDB();

const router = require('./route');
app.use('/api', router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Database server is running on http://localhost:${PORT}`);
});

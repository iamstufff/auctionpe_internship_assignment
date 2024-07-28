const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const actionRoutes = require('./routes/actionRoutes');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        Name: "AuctionPe Server!",
        Status: "Active",
        Date: new Date().toLocaleString()
    })
});

app.use('/api/auth', authRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/actions', actionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

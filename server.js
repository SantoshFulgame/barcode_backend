const express = require('express');
const cors = require('cors');
const barcodeRoutes = require('./routes/barcodeRoutes');
const connectDB = require('./db/conn');  // Import the connectDB function
const specification = require('./routes/specificaiontRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();  // Call the connectDB function to establish the connection

// Routes
app.use('/api', barcodeRoutes);
app.use('/specification',specification);


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

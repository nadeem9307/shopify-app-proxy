const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Importing the CORS module
const app = express();
const port = 5000;

// Enable CORS for all routes (you can restrict this to specific origins)
app.use(cors());

// Route to fetch Shopify orders
app.get('/api/shopify/orders', async (req, res) => {
  try {
    const response = await axios.get('https://knightcustoms.myshopify.com/admin/api/2024-10/orders.json?status=subscription', {
      headers: {
        'X-Shopify-Access-Token': 'dfd',//as-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
        'Content-Type': 'application/json'
      }
    });

    // Send the Shopify API response back to the client
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching orders from Shopify');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const express = require('express');
//const app = express();
const router = express.Router();
const path = require('path');

// Serve static files (like HTML, CSS, JS)
router.use(express.static(path.join(__dirname, '../Views')));

// Route to serve the HTML file
router.get('', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', 'home.html'));
});





module.exports = router;
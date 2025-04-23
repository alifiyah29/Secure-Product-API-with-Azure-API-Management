const express = require('express');
const app = express();

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Espresso' },
    { id: 2, name: 'Latte' },
    { id: 3, name: 'Cappuccino' }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

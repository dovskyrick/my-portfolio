const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/models', (req, res) => {
  const modelsDir = path.join(__dirname, 'public/models');
  fs.readdir(modelsDir, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan directory');
    }
    const gltfFiles = files.filter(file => file.endsWith('.glb') || file.endsWith('.gltf'));
    res.json(gltfFiles);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

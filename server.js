const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// publicフォルダの静的ファイルを配信
app.use(express.static('public'));

// "/" にアクセスが来たときは index.html を返す
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

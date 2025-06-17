const express = require("express")
const path = require("path")

const app = express()
const PORT = process.env.PORT || 3000

// 静的ファイルの提供（public フォルダから）
app.use(express.static(path.join(__dirname, "public")))

// ルートページ（カテゴリ一覧）
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

// 各カテゴリのルーティング
app.get("/papers", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "papers", "index.html"))
})

app.get("/ML", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "ML", "index.html"))
})

app.get("/programming", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "programming", "index.html"))
})

app.get("/biology", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "biology", "index.html"))
})

// 個別記事のルーティング
app.get("/papers/:article", (req, res) => {
  const articleName = req.params.article
  const filePath = path.join(__dirname, "public", "papers", `${articleName}.html`)

  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).sendFile(path.join(__dirname, "public", "404.html"))
    }
  })
})

app.get("/ML/:article", (req, res) => {
  const articleName = req.params.article
  const filePath = path.join(__dirname, "public", "ML", `${articleName}.html`)

  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).sendFile(path.join(__dirname, "public", "404.html"))
    }
  })
})

app.get("/programming/:article", (req, res) => {
  const articleName = req.params.article
  const filePath = path.join(__dirname, "public", "programming", `${articleName}.html`)

  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).sendFile(path.join(__dirname, "public", "404.html"))
    }
  })
})

app.get("/biology/:article", (req, res) => {
  const articleName = req.params.article
  const filePath = path.join(__dirname, "public", "biology", `${articleName}.html`)

  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).sendFile(path.join(__dirname, "public", "404.html"))
    }
  })
})

// 404エラーハンドリング
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>404 - ページが見つかりません</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <div class="container">
        <h1>404 - ページが見つかりません</h1>
        <p>お探しのページは存在しません。</p>
        <a href="/">トップページに戻る</a>
      </div>
    </body>
    </html>
  `)
})

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

// Vercel用のエクスポート
module.exports = app

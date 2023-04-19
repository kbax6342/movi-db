const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const PORT = 3002;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'moviedb',
});

app.use(cors());
app.use(express.json());

// Route to get all posts
app.get('/api/get', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Route to get one post
app.get('/api/getFromId/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM posts WHERE id = ?', id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Route for creating the post
app.post('/api/create', (req, res) => {
  const name = req.body.name;
  const passwords = req.body.password;
  const emails = req.body.email;

  db.query(
    'INSERT INTO users (email,name,password) VALUES (?,?,?)',
    [emails, name, passwords],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
  res.sendStatus(200);
});

app.post('/api/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  

  db.query(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
        return result.json("Fail")
      }
      if(result.length > 0){
        var values = result[0]
        console.log(values)
        return res.status(200).json(values)
      }else{
        return res.json("Fail")
      }
      })
      
    
});

app.post('/api/like/:id', (req, res) => {
  const id = req.params.id;
  db.query(
    'UPDATE posts SET likes = likes + 1 WHERE id = ?',
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

// Route to delete a post

app.delete('/api/delete/:id', (req, res) => {
  const id = req.params.id;

  db.query('DELETE FROM posts WHERE id= ?', id, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

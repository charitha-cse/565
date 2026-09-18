import express from 'express';
import mysql from 'mysql';

const app = express();
const port = 3004;

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb'
});

// Connect to database
db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

app.get('/', (req, res) => {
    res.send('Connected to MySQL Database');
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});

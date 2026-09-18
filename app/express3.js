import express from 'express';

const app = express();
const port = 3003;

app.use(express.json());

let items = [];

app.get('/', (req, res) => {
    res.send('CRUD Server Running');
});

// CREATE
app.post('/items', (req, res) => {
    items.push(req.body);
    res.send('Item added!');
});

// READ
app.get('/items', (req, res) => {
    res.json(items);
});

// UPDATE
app.put('/items/:id', (req, res) => {
    const id = req.params.id;
    items[id] = req.body;
    res.send('Item updated!');
});

// DELETE
app.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    items.splice(id, 1);
    res.send('Item deleted!');
});

app.listen(port, () => {
    console.log(`CRUD server running at http://localhost:${port}`);
});

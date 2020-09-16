const controller = require('../controllers/posts.controller.js');

module.exports = app => {
    app.get('/posts', (req, res) => {
        response = controller.read();
        res.send(response);
    });

    app.get('/posts/:id', (req, res) => {
        let id = req.params.id;
        response = controller.readID(id);
        res.send(response);
    });

    app.post('/posts', (req, res) => {
        res.send("Adicionar post");
    });
    app.put('/posts', (req, res) => {
        res.send("Atualizar post");
    });
    app.delete('/posts', (req, res) => {
        res.send("Atualizar post");
    });
}
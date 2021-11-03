const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`СЕРВЕР ЗАПУСТИЛСЯ НА ПОРТУ 3001 ${PORT}`);
})

app.get('/api', (req, res) => {
    res.json({
        message: "Hello from Backend"
    })
})
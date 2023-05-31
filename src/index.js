const express = require("express");
const app = express();
// const product = require("../api/product");

// app.use(express.json({ extended: false }));

// app.use("/api/product", product);

app.use('/api/welcome', (req, res) => {
    res.send({ message: 'Welcome to api!!' });
});

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

module.exports = app;

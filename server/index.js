import express from "express";

const PORT = 3000;

const app = express();
app.use(express.static('.'));

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});

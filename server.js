const app = require('./lib/app');

const PORT = process.env.PORT || 7892;

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});

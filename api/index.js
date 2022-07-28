const server = require('./src/app');
const port = process.env.PORT || 3001;

// start the server
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    }
);
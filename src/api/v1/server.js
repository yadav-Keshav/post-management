const app = require('./app');
const connectDb = require('./config/connectDb');


// Handling uncaught Error
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
})


//Connecting DB
connectDb();

const PORT = process.env.PORT || 4003;
const server = app.listen(PORT, () => {
    console.log(`Server is Listening on PORT : ${PORT}`);
});


//Handling Unhandled Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Server is Closed Due to ${err.message}`);
    server.close();
    process.exit(1);
})
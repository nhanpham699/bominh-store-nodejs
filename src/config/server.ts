import express from "express";
const app = express();
import userRoute from "../routes/user.route";
import testRoute from "../routes/test.route";


// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// start the Express server
app.listen(process.env.PORT, () => {
  console.log(`server started at http://localhost:${process.env.PORT}`);
});



app.use('/user', userRoute);
app.use('/test1', testRoute);
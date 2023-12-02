const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(`database connected successfully`);
  })
  .catch((err) => console.log(err.message));

mongoose.connection.on("connected", () => {
  console.log(`mongoose connected to database`);
});

mongoose.connection.on("error", (err) => {
  console.log(err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log(`mongoose connection is disconnected`);
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});

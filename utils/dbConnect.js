import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  // if (mongoose.connection.readyState >= 1) {
  //   return;
  // }mongodb://localhost:27017/test
  const db = await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.dcr08.mongodb.net/grad?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;

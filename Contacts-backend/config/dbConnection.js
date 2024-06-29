const mongoos = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoos.connect("mongodb+srv://mr2076:wDTh0XHe7sDcDDnY@cluster0.osj4buq.mongodb.net/");
    console.log(
      `Database connected: ${connect.Connection.host}, ${connect.Connection.name}`
    );
  } catch (err) {
    console.error(`Database connection faild ${err}`);
    process.exit(1);
  }
};

module.exports = connectDB;

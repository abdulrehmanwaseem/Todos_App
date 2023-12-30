import mongoose from "mongoose";

const DbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://abdulrehmancode1:todos123@todosbackend.t7tbsro.mongodb.net/todos"
    );
    console.log("DataBase Connected");
  } catch (error) {
    console.log(error);
  }
};
export default DbConnection;

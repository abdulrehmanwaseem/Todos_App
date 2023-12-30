import Todos from "../model/todos.js";

const getDashboard = async (req, res) => {
  try {
    const totalTodos = await Todos.find();
    const completedTodos = totalTodos.filter(
      (todo) => todo.status === "Completed"
    );
    const pendingTodos = totalTodos.filter((todo) => todo.status === "Pending");
    res.json({
      totalTodos: totalTodos.length,
      completedTodos: completedTodos.length,
      pendingTodos: pendingTodos.length,
    });
  } catch (error) {
    res.json(error);
  }
};

export { getDashboard };

import Todos from "../model/todos.js";

const get = async (req, res) => {
  const {
    sort = "1",
    sortBy = "_id",
    search = "",
    searchBy = "",
    page,
    perPage,
  } = req.query;
  let query = {};

  const skip = (parseInt(page) - 1) * parseInt(perPage);

  if (search && searchBy) {
    query[searchBy] = new RegExp(search, "i");
  }

  try {
    const data = await Todos.find(query)
      .sort({ [sortBy]: Number(sort) })
      .skip(skip)
      .limit(perPage);

    const totalRecords = await Todos.countDocuments();
    res.json({ data, totalRecords });
  } catch (error) {
    res.json(error);
  }
};
const post = async (req, res) => {
  try {
    await Todos.create(req.body);
    res.json("Todos Created");
  } catch (error) {
    res.json(error);
  }
};
const update = async (req, res) => {
  try {
    await Todos.findByIdAndUpdate(req.params, req.body);
    res.json("Updated Succesfully");
  } catch (error) {
    res.json(error);
  }
};
const del = async (req, res) => {
  try {
    await Todos.findByIdAndDelete(req.params);
    res.json("Deleted Succesfully");
  } catch (error) {
    res.json(error);
  }
};

export { get, post, update, del };

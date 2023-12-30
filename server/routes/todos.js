import express from "express";
import { get, post, update, del } from "../controller/todos.js";

const router = express.Router();

router.route("/todos").get(get).post(post);
router.route("/todos/:_id").put(update).delete(del);

export default router;

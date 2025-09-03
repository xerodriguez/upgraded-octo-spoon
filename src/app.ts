import { express } from "express";
import { createTaks } from "./controllers/tasks";
import { Task } from "./domain/index";

const app = express();
const apiRoute = "/api/v1";

app.get('/', (req: any, res: any) => {
  res.send('Hello World')
})

app.post(`${apiRoute}/tasks`, (req: any, res: any) => {
  // missing validation of the endpoint types 
  const task: Task = createTaks(req.body);
  if (!task.id) {
    res.send("500", "Error creating task");
  } else {
    res.send("201", task);
  }
});

app.listen(3000);
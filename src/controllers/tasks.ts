
import { Task, TaskDTO } from "../domain/Task";
import { v4 as uuidv4, validate } from 'uuid';

const tasksDataList: Task [] = [];

export const createTask = (task: TaskDTO): Task => {
    task.id = uuidv4();
    if (!checkTaskData(task)) {
        return {} as Task;
    }
    // todo: sanitize input values! check for sql injection 
    const newTask = task as Task;
    newTask.completed = false;
    tasksDataList.push(newTask);
    return newTask;
}

export const checkTaskData = (taskDTO: TaskDTO): boolean => {
    if (taskDTO.title.length <= 0 || taskDTO.title.trim().length <= 0) {
        return false;
    }
    return true;
}

export const getTasks = (): Task[] => {
    return tasksDataList;
}

export const getTaskById = (id: string): Task | undefined => {
    if (!validate(id)) {
        return undefined;
    }
    return tasksDataList.find(t => t.id === id);
}

export const updateTask = (taskDTO: TaskDTO): Task => {
    if (!validate(taskDTO.id)) {
        return {} as Task;
    }
    const taskToUpdate = tasksDataList.find(t => t.id === taskDTO.id);
    if (!taskToUpdate) {
        return {} as Task;
    }
    taskToUpdate.completed =  
}
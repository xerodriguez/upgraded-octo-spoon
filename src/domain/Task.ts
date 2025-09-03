
export interface Task {
    id: string,
    title: string,
    description?: string,
    completed: boolean,
};

export interface TaskDTO {
    id?: string,
    title: string,
    description?: string,
    completed: boolean,
}


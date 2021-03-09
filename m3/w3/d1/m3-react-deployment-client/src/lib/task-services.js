import axios from "axios";

class TaskService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  getTaskById(projectId, taskId) {
    return this.api
      .get(`/api/projects/${projectId}/tasks/${taskId}`)
      .then(({ data }) => data);
  }

  addTask(task) {
    return this.api.post(`/api/tasks`, task).then(({ data }) => data);
  }
}

let taskService = new TaskService();

export default taskService;

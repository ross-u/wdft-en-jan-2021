import axios from "axios";

class ProjectService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  getAllProjects() {
    return this.api.get(`/api/projects`).then(({ data }) => data);
  }

  getProjectById(id) {
    return this.api.get(`/api/projects/${id}`).then(({ data }) => data);
  }

  addProject(newProject) {
    return this.api.post(`/api/projects`, newProject).then(({ data }) => data);
  }

  updateProject(id, projectData) {
    return this.api
      .put(`/api/projects/${id}`, projectData)
      .then(({ data }) => data);
  }

  deleteProject(id) {
    return this.api.delete(`/api/projects/${id}`).then(({ data }) => data);
  }
}

let projects = new ProjectService();

export default projects;

import axios from "axios";

class AuthService {
  constructor() {
    // We create axios request base
    this.auth = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true,
    });
  }

  // authService methods only make axios calls to the API

  signup = (username, password) => {
    const pr = this.auth
      .post("/auth/signup", { username, password })
      .then((response) => response.data);

    // .then(({ data }) => data); //

    return pr;
  };

  login = (username, password) => {
    const pr = this.auth
      .post("/auth/login", { username, password })
      .then((response) => response.data);

    return pr;
  };

  logout = () => {
    const pr = this.auth
      .get("/auth/logout", {})
      .then((response) => response.data);

    return pr;
  };

  me = () => {
    const pr = this.auth.get("/auth/me").then((response) => response.data);

    return pr;
  };
}

const authService = new AuthService();

export default authService;

// Service is a set of methods abstracted and placed into a class, out of which we create one instance.
// In the above case, all axios request calls are abstracted into methods.

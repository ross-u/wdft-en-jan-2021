import axios from "axios";

// 1. We use a class to organize our code and methods
class BeerService {
  constructor() {
    this.base = axios.create({
      baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
    });
  }

  getSingleBeer = (id) => {

    return this.base.get(`/${id}`)
      .then((response) => {
        const { data } = response;
        return data;
    });
  }

  getAllBeers = () => { }
  
  getRandomBeer = () => { }

}

// 2. We create a single instance object that will be exported.
const beerServiceInstance = new BeerService();

export default beerServiceInstance;



/* 
Axios calls can be moved into separate files to achieve the 
separation of concerns.
The code that does requests to the API is abstracted and exists as
a separate entity.
*/

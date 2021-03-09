const Project = require('./../models/project-model');

// POPULATE THE DB
const populate = () => {
  Project.find()
    .then(projects => {
      if (projects.length === 0) {
        const seed = require('./seed.json');

        Project.create(seed)
          .then(newProjects => {
            console.log('----> Populating DB with seed data.');
            console.log(`---->  ‎✔	Created ${newProjects.length} documents.`);
            console.log('---->  ‎✔	Done populating DB!');
          })
          .catch(error => console.error(`Error populating DB`, error));
      }
    })
    .catch(error => console.error(`Error populating DB`, error));
};

module.exports = populate;

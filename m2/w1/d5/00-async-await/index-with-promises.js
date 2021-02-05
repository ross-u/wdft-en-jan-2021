const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");
const DB_NAME = "recipe-app";

const MONGODB_URI = `mongodb://localhost:27017/${DB_NAME}`;

function main() {
  mongoose
    .connect(MONGODB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((self) => {
      console.log(`Connected to the database: "${self.connection.name}"`);
      // Before adding any documents to the database, let's delete all previous entries
      return self.connection.dropDatabase();
    })
    .then(() => {
      // ITERATION 1
      const ironChicken = {
        title: "Ironhack Beer Glazed Chicken",
        level: "UltraPro Chef",
        ingredients: [
          "At least 5 bottles of beer (for the Chef :) )",
          "5 tablespoons honey",
          "1/3 cup soy sauce (such as Silver Swan®)",
          "1/4 cup Asian (toasted) sesame oil",
          "2 tablespoons Asian chili garlic sauce",
          "salt to taste",
          "8 skinless, boneless chicken breasts",
        ],
        cuisine: "Web Dev",
        dishType: "main_course",
        image:
          "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
        duration: 40,
        creator: "Bob",
      };

      // ITERATION 2
      const createPr = Recipe.create(ironChicken);
      return createPr;
    })
    .then((createdRecipeDocument) => {
      console.log("Recipe.create()", createdRecipeDocument);

      // ITERATION 3
      const insertManyPr = Recipe.insertMany(data);
      return insertManyPr;
    })
    .then((createdRecipesArr) => {
      // Print the title of each recipe to the console
      createdRecipesArr.forEach((recipeDocument, i) => {
        console.log(i + 1, recipeDocument.title);
      });

      // ITERATION 4
      const updatePr = Recipe.findOneAndUpdate(
        { title: "Rigatoni alla Genovese" },
        { duration: 100 },
        { new: true }
      );
      return updatePr;
    })
    .then((updatedRecipeDocument) => {
      console.log("UPDATED RECIPE ->", updatedRecipeDocument);

      // ITERATION 5
      const deletePr = Recipe.deleteOne({ title: "Carrot Cake" });
      return deletePr;
    })
    .then((deleteOneResult) => {
      console.log("DELETED -> ", deleteOneResult);

      // ITERATION 6
      const closePr = mongoose.connection.close();
      return closePr;
    })
    .then(() => {
      console.log("DATABASE CLOSED!");
    })
    .catch((error) => {
      console.error("Error connecting to the database", error);
    });
}

main();

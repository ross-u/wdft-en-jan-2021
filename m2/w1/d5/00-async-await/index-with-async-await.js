const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");
const DB_NAME = "recipe-app";

const MONGODB_URI = `mongodb://localhost:27017/${DB_NAME}`;

// const main = async () => {}


const example = () => console.log('example!');


async function main() {

  try {
    const self = await mongoose.connect(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    console.log(`Connected to the database: "${self.connection.name}"`);
    await self.connection.dropDatabase();
    


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
    const createdRecipeDocument = await Recipe.create(ironChicken);
    console.log("Recipe.create()", createdRecipeDocument);

    // ITERATION 3
    const createdRecipesArr = await Recipe.insertMany(data);

    // Print the title of each recipe to the console
    createdRecipesArr.forEach((recipeDocument, i) => {
      console.log(i + 1, recipeDocument.title);
    });

    // ITERATION 4
    const query = { title: "Rigatoni alla Genovese" };
    const update = { duration: 100 };
    const options = { new: true };

    const updatedRecipeDoc = await Recipe.findOneAndUpdate(query, update, options);
    console.log("UPDATED RECIPE ->", updatedRecipeDoc);

    // ITERATION 5
    const deleteOneResult = await Recipe.deleteOne({ title: "Carrot Cake" });
    console.log("DELETED -> ", deleteOneResult);

    // ITERATION 6
    await mongoose.connection.close();
    console.log("DATABASE CLOSED!");

  } catch (error) {
    console.error("Error connecting to the database", error);
  }

  

}

main();


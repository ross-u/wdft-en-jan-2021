import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";

const App = () => {
  // return <h1>Bulma</h1>;
  return (
    <div>
      <Navbar />

      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="string" placeholder="arslane@gmail.com" />

      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>

      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton>

    </div>
  );
};

export default App;

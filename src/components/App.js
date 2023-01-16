import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import SpicyFoodList from  "./Hook-StateArrays/SpicyFoodList"

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  const [isDark, setIsDark] = useState(false);
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light";

  function handleDarkModeClick() {
    setIsDark((isDark) => !isDark )
  }


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDark ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />


       {/* For the previous lab */}
      <div style={{background:"Grey", padding:5}}>
         <SpicyFoodList /> 
      </div>

    </div>
    
  );
}

export default App;

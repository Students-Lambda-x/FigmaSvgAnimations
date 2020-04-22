import React from "react";

import * as icons from "./components/Icons";

import "./App.css";

/**
 * Show all imported icons in different si
 * @return {*}
 * @constructor
 */
function App(){
  return ( <div className="App">
    <h1>
      Hot to automate delivery SVG icons from Figma to React using Figma API
    </h1>
    
    <div className="all-you-imported-icons">
      { Object.values( icons )
        .map( ( IconComponent ) => (
          <IconComponent height="500px" width="1000px"
                         key={ IconComponent.name }/> ) ) }
    
    </div>
  </div> );
}

export default App;

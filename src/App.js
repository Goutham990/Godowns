import React, { useState } from "react";
import "./App.css";
import TreeView from "./components/TreeView";
import ItemDetails from "./components/ItemDetails";
import Login from "./Pages/Login";

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="app">
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <div className="content">
          <TreeView onSelectItem={handleSelectItem} />
          <ItemDetails item={selectedItem} />
        </div>
      )}
    </div>
  );
};

export default App;

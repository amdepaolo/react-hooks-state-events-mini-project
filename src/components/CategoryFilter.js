import React from "react";

function CategoryFilter({categories, selectedCategory, onCatSelect}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        const selectClass = category === selectedCategory? "selected" : null;
        
        return(
          <button 
            onClick={()=> onCatSelect(category)}
            className={selectClass}
            key={category}
          >
            {category}
          </button>)
      })}
    </div>
  );
}

export default CategoryFilter;

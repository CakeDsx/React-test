// App.jsx

import React, { useState } from 'react';
import ResourceList from './components/ResourceList';
import './styles/styles.scss'; // Import the main SCSS file

function App() {
  const [currentCategory, setCurrentCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div>
      <h1>Resource Viewer</h1>
      <nav>
        <ul>
          <li><button onClick={() => handleCategoryClick(null)}>All</button></li>
          <li><button onClick={() => handleCategoryClick('html')}>HTML</button></li>
          <li><button onClick={() => handleCategoryClick('css')}>CSS</button></li>
          <li><button onClick={() => handleCategoryClick('javascript')}>JavaScript</button></li>
          <li><button onClick={() => handleCategoryClick('react')}>React</button></li>
          <li><button onClick={() => handleCategoryClick('headless-cms')}>Headless CMS</button></li>
        </ul>
      </nav>
      <ResourceList currentCategory={currentCategory} />
    </div>
  );
}

export default App;

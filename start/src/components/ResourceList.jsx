// ResourceList.jsx

import React from 'react';
import { resources } from '../assets/ressurser'; // Importing the resources array
import { Link } from 'react-router-dom'

export default function ResourceList() {
  return (
    <ul>
      {resources?.map((resource, index) => (
        <li key={index}>
          <a href={resource.url} target="_blank" rel="#">{resource.title}</a> - {resource.category}
        </li>
      ))}
    </ul>
  );
}



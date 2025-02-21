
import React from 'react';
import styled from 'styled-components';
const FilterBar = ({ filters, setFilters }) => {
    return (
       
      <div className="space-y-4 space-x-5 select selected options">
        <select
          className="border rounded-lg p-2  selected"
          onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
        >
          <option value="">All Genders</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Unisex">Unisex</option>
        </select>

    
  
        <select
          className="border rounded-lg p-2  "
          onChange={(e) => setFilters({ ...filters, color: e.target.value })}
        >
          <option value="">All Colors</option>
          <option value="Green">Green</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
        </select>
      </div>
      
    );
  };


  
  
  export default FilterBar;
  
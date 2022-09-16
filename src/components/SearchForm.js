import React, { useState } from "react";

export default function SearchForm() {
 
  return (
    <section className="search-form">
     <form>
      <label htmlFor='searchInput'>Search</label>
      <input 
      max-length='15'
      placeholder='Search'
      id='searchInput'
      
      />
     </form>
    </section>
  );
}

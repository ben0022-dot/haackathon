"use client";

import { useState } from "react";

export default function SearchBar({ onSearch, defaultValue = "" }) {
  const [value, setValue] = useState(defaultValue);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(value.trim());
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search">
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search electrician, tailor, catering..."
        aria-label="Search opportunities"
        className="search-input"
      />
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
}
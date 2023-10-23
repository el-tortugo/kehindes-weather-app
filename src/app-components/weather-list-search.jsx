import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    }

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search by date (YYYY-MM-DD)"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default Search;
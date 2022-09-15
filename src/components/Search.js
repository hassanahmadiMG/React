import React from 'react';
import { FaSearch } from 'react-icons/fa'

const Search = ({handleSearchNote}) => {
    return(
 <div className="search">
<FaSearch className='FaSearch' size='1.3em' />
<input 
onClick={(event) => handleSearchNote(event.target.value)}
type='text'
placeholder='type to search...' />
 </div>
    )
};

export default Search;
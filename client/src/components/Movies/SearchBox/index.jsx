import {useState} from 'react'
import propTypes from 'prop-types'
import './index.scss'

const SearchBox = ({onSearch}) =>{
    const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
    }
}  
    return (
        <div className='search-box'>
            <input className='search-type' type="text" value={searchTerm} onChange={handleInputChange} onKeyPress={handleKeyPress}/>
            <button className='search-button' onClick={handleSearchClick}>Search</button>
        </div>
    )
}

SearchBox.propTypes={
    onSearch: propTypes.string.isRequired,
}

export default SearchBox
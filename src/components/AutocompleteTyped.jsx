import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import frutas from './frutas';

const Autocomplete = ({ debounceTime }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions(frutas);
  }, []);

  const handleInputChange = debounce((event) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  }, debounceTime);

  const handleSuggestionClick = (value) => {
    setInputValue(value);
    setFilteredSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search..."
        aria-autocomplete="list"
        aria-controls="autocomplete-options"
      />
      <ul id="autocomplete-options" role="listbox">
        {filteredSuggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)} role="option">
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

Autocomplete.propTypes = {
  debounceTime: PropTypes.number,
};

Autocomplete.defaultProps = {
  debounceTime: 300,
};

export default Autocomplete;
import "./search-box.styles.css";
const SearchBox = ({ className, placeholder, onchangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onchangeHandler}
  />
);

export default SearchBox;

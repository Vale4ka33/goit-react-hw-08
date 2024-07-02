import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { useId } from "react";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchId = useId();
  const filterValue = useSelector(selectNameFilter);

  const handleInputChange = (newValue) => {
    dispatch(changeFilter(newValue));
  };

  return (
    <div className={css.container}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.searchInput}
        type="text"
        id={searchId}
        name="search"
        value={filterValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;

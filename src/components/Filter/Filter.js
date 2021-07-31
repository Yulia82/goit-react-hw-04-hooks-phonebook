import PropTypes from "prop-types";
import { FilterLabel, FilterInput } from "./Filter.styles";

const Filter = ({ filter, onFilterChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;

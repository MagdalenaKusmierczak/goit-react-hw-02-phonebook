import PropTypes from 'prop-types';

const Filter = ({ filter, handleFilter }) => {
  return (
    <label>
      Find contacts by name
      <input onChange={handleFilter} type="text" name="filter" value={filter} />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleFilter: PropTypes.func.isRequired,
};
export default Filter;

import PropTypes from 'prop-types';

const Filter = ({ filter, handleFilter }) => {
  return (
    <div>
      <input onChange={handleFilter} type="text" name="filter" value={filter} />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleFilter: PropTypes.func.isRequired,
};
export default Filter;

import PropTypes from 'prop-types';
import Select from './Select';
import { useSearchParams } from 'react-router-dom';

function SortBy({ options }) {
  const [searchParmas, setSearchParams] = useSearchParams();
  const sortBy = searchParmas.get('sortBy') || '';

  function handleChange(e) {
    searchParmas.set('sortBy', e.target.value);
    setSearchParams(searchParmas);
  }

  return (
    <Select
      options={options}
      type='white'
      value={sortBy}
      onChange={handleChange}
    />
  );
}

SortBy.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
};

export default SortBy;

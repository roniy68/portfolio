import PropTypes from 'prop-types';

export default function NumberBtn({
  id, className, number, onClick,
}) {
  return (
    <button type="button" id={id} className={`number-btn ${className}`} onClick={onClick}>
      {number}
    </button>
  );
}

NumberBtn.propTypes = {
  number: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

NumberBtn.defaultProps = {
  onClick: null,
  id: null,
  className: null,
};

import PropTypes from 'prop-types';

export default function OperationBtn({
  operation, id, className, onClick,
}) {
  return (
    <button type="button" id={id} className={`operation-btn ${className}`} onClick={onClick}>
      {operation}
    </button>
  );
}

OperationBtn.propTypes = {
  operation: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

OperationBtn.defaultProps = {
  id: null,
  className: null,
  onClick: null,
};

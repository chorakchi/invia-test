import PropTypes from "prop-types";

export default PropTypes.shape({
  url: PropTypes.string,
  display: PropTypes.shape({
    url: PropTypes.string,
  }),
  small: PropTypes.shape({
    url: PropTypes.string,
  }),
  thumb: PropTypes.shape({
    url: PropTypes.string,
  }),
});

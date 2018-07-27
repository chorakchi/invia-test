import PropTypes from "prop-types";

export default PropTypes.shape({
  authentication_token: PropTypes.string,
  created_at: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.number,
  is_guest: PropTypes.bool,
  last_seen: PropTypes.string,
  name: PropTypes.string,
  provider: PropTypes.any,
  uid: PropTypes.any,
  updated_at: PropTypes.string,
  username: PropTypes.string,
  uuid: PropTypes.string,
});

import PropTypes from "prop-types";
import AvatarShape from "./AvatarShape";

export default PropTypes.shape({
  avatar: AvatarShape,
  id: PropTypes.number.isRequired,
  interests: PropTypes.array.isRequired,
  is_guest: PropTypes.bool.isRequired,
  user_id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
});

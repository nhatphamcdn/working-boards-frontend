import auth from './auth.api';
import user from './user.api';

export default ({
  $axios
}) => ({
  auth: auth($axios),
  user: user($axios)
})

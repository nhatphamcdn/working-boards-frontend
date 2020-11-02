import generateApi from '@/services/api.service';
import config from '@/config';

const CONTEXT_API_KEY = 'api';
const CONTEXT_CONFIG_KEY = 'config';

export default (context, inject) => {
  inject(CONTEXT_CONFIG_KEY, config);
  inject(CONTEXT_API_KEY, generateApi(context))
}

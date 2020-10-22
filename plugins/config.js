import config from '@/config';

const CONTEXT_CONFIG_KEY = 'config';

export default (context, inject) => {
  inject(CONTEXT_CONFIG_KEY, config);
}

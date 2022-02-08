/**
 * Module Dependencies
 */
import axios from 'axios';

import config from '@config';

export default axios.create({
  baseURL: config.get('CAT_API_HOST'),
  headers: { 'X-Api-Key': config.get('CAT_API_KEY') },
});

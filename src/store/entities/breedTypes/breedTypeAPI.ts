/**
 * Module Dependencies
 */
import axios from '@lib/axios';

export default {
  requestAllBreedTypes: () =>
    axios.request({
      method: 'GET',
      url: '/breeds',
    }),
};

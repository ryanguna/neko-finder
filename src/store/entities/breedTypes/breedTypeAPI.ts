/**
 * Module Dependencies
 */
import axios from '@lib/axios';

export const breedTypeAPI = {
  requestAllBreedTypes: () =>
    axios.request({
      method: 'GET',
      url: '/breeds',
    }),
};

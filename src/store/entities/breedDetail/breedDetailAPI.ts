/**
 * Module Dependencies
 */
import axios from '@lib/axios';

export default {
  requestBreedDetailsById: (id: string) =>
    axios.request({
      method: 'GET',
      url: `/images/${id}`,
    }),
};

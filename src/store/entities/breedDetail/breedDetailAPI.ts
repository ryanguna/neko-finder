/**
 * Module Dependencies
 */
import axios from '@lib/axios';

export default {
  requestBreedDetailsById: (breedId: string) =>
    axios.request({
      method: 'GET',
      url: `/images/${breedId}`,
    }),
};

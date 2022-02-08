/**
 * Module Dependencies
 */
import axios from '@lib/axios';

export default {
  requestBreedsById: (breedId: string, page = 1, limit = 10) =>
    axios.request({
      method: 'GET',
      url: '/images/search',
      params: {
        page,
        limit,
        breed_id: breedId,
      },
    }),
};

/**
 * Module Dependencies
 */
import axios from '@lib/axios';

export const breedDetailAPI = {
  requestBreedDetailsById: (id: string) =>
    axios.request({
      method: 'GET',
      url: `/images/${id}`,
    }),
};

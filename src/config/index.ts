/**
 * Module Dependencies
 */
import { Map } from 'immutable';

const fromJS = <O>(obj: O): IM<O> => Map(obj as any) as any;

export default fromJS({
  PROJECT_NAME: process.env.REACT_APP_PROJECT_NAME || 'neko-app',

  CAT_API_HOST:
    process.env.REACT_APP_CAT_API_HOST || 'https://api.thecatapi.com/v1',
  CAT_API_KEY: process.env.REACT_APP_CAT_API_KEY || '',
});

interface IM<O> extends Map<O, any> {
  get<K extends keyof O>(key: K): O[K];
}

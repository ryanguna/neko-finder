/**
 * Module Dependencies
 */
import { Map } from 'immutable';

const fromJS = <O>(obj: O): IM<O> => Map(obj as any) as any;

export default fromJS({
  PROJECT_NAME: process.env.REACT_APP_PROJECT_NAME || 'neko-app',
});

interface IM<O> extends Map<O, any> {
  get<K extends keyof O>(key: K): O[K];
}

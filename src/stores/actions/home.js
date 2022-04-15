import * as types from '../mutation-types';
export function updateName(parmas) {
  return {
    type: types.UPDATE_GLOBAL_NAME,
    payload: parmas
  };
}

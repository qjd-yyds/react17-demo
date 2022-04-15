import * as types from '../../mutation-types';

const initialState = {
  homeName: '云课堂'
};

const mutations = {
  [types.UPDATE_GLOBAL_NAME](state, action) {
    return {
      ...state,
      homeName: action.payload
    };
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  if (mutations[action.type]) {
    return mutations[action.type](state, action);
  }
  return state;
}

import getters from '../requests/getters';
import actions from '../requests/actions';
import mutations from '../requests/mutations';

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  getters,
  actions,
  mutations,
};

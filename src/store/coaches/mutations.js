export default {
  registerCoach(state, data) {
    state.coaches.push(data);
  },
  setCoach(state, payload) {
    state.coaches = payload;
  },
  setFetchTimeStamp(state) {
    state.lastFetch = new Date().getTime();
  },
};

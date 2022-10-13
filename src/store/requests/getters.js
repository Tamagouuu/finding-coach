export default {
  requests(state, _, rootState, _2) {
    const coachId = rootState.userId;

    const filteredRequests = state.requests.filter(
      (req) => req.coachId == coachId
    );

    return filteredRequests;
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};

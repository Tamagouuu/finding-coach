export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://vue-http-demo-a5052-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to fetch!!!');
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },

  async fetchCoach(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://vue-http-demo-a5052-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    const coachLists = [];

    for (const key in responseData) {
      const data = {
        id: context.rootGetters.userId,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coachLists.push(data);
    }
    context.commit('setCoach', coachLists);
    context.commit('setFetchTimeStamp');
  },
};

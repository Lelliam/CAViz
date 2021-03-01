const mutation = {
  relations(state, payload) {
    state.relations = JSON.parse(JSON.stringify(payload));
  },
  cards_data(state, payload) {
    state.cards_data = JSON.parse(JSON.stringify(payload));
  },
  modelSetting(state, payload) {
    // console.log(state.modelSetting)
    state.modelSetting = JSON.parse(JSON.stringify(payload));
  },
};

export default mutation;

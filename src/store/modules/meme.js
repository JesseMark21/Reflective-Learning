const state = {
    title: null,
    description: null,
    image: null
  };
  
  const mutations = {
    addMeme(state, title, description, image){
      state.title = title;
      state.description = description;
      state.image = image;
    },
    removeMeme(state){
      state.title = null;
      state.description = null;
      state.image = null;
    },
    logout(state) {
      state.userId = null;
    },
    login(state, userId) {
      state.userId = userId;
    }
  };
  
  export default {
    state,
    mutations
  }
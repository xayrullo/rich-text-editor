import ApiService from "@/core/services/ApiService";

const SET_CONTENTS = "SET_CONTENTS";
const REMOVE_CONTENT = "REMOVE_CONTENT";
const UPDATE_CONTENT = "UPDATE_CONTENT";
const ADD_CONTENT = "ADD_CONTENT";

const state = {
  contents: [],
};

const mutations = {
  [SET_CONTENTS](state, payload) {
    state.contents = payload;
  },
  [REMOVE_CONTENT](state, payload) {
    const index = state.contents.findIndex((con) => con.id === payload);
    state.contents.splice(index, 1);
  },
  [UPDATE_CONTENT](state, payload) {
    const index = state.contents.findIndex((con) => con.id === payload.id);
    state.contents.splice(index, 1, payload);
  },
  [ADD_CONTENT](state, payload) {
    state.contents.push(payload);
  },
};

const actions = {
  fetchContents({ commit }, params) {
    return new Promise((resolve, reject) => {
      ApiService.get("/contents", params)
        .then((res) => {
          commit(SET_CONTENTS, res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getContentDetail({ commit }, params) {
    return new Promise((resolve, reject) => {
      ApiService.get(`/contents/${params}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  addContent({ commit }, params) {
    return new Promise((resolve, reject) => {
      ApiService.post("/contents", params)
        .then((res) => {
          commit(ADD_CONTENT, res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  updateContent({ commit }, params) {
    return new Promise((resolve, reject) => {
      ApiService.put(`/contents/${params.id}`, params)
        .then((res) => {
          commit(UPDATE_CONTENT, params);
          resolve(params);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  removeContent({ commit }, id) {
    return new Promise((resolve, reject) => {
      ApiService.remove(`/contents/${id}`)
        .then((res) => {
          commit(REMOVE_CONTENT, id);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

const getters = {
  getContents: (state) => {
    return state.contents;
  },
};

export const content = {
  state,
  mutations,
  actions,
  getters,
};

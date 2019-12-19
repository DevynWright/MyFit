import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

let sandBox = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/devyn",
  timeout: 3000
})

let api = axios.create({
  baseURL: "https://trackapi.nutritionix.com/v2/natural/nutrients",
  timeout: 3000,
  headers: {
    "x-app-key": "2abf0e3f0cb6bae526d9ef2aae66a247",
    "x-app-id": "9111ea7a"
  }
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logs: [],
    searchResults: []
  },
  mutations: {
    
    addLog(state, log){
      state.logs.push(log)
    },

    setAllLogs(state, data) {
      state.logs= data; 
    }
  },
  actions: {
    async getLogs({commit, dispatch}){
      let res = await sandBox.get("logs");
      commit("setAllLogs", res.data.data);
    },

    async addLog({commit, dispatch}, log){
      let res = await sandBox.post("logs", log)
      
      commit("addLog", res.data.data)
    }
  },
  modules: {
  }
}
);

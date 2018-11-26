import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    input: {},
    tasks: [
      {
        task: "This is a task",
        check: false
      }
    ]
  },
  mutations: {
    add: function(state) {
      state.tasks.push({
        task: state.input.task,
        check: false
      });
      state.input.task = ''; // Reset the input field
    },
    remove(state, task) {
      state.tasks.splice(state.tasks.indexOf(task), 1);
    }
  },
})

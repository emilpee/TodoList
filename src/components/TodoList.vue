<template>
<div class="container">
  <div class="list">
    <h1>To Do List</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id"> 
        <input type="checkbox">
        <span> {{ task.task }} </span>
        <button @click="remove(task)">x</button>
      </li>
    </ul>
  </div>
  <input type="text" v-model="input.task" placeholder="I need to...">
  <button type="button" @click="add">Add task</button>
</div>
</template>

<script>
export default {
  name: 'TodoList',
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    input() {
      return this.$store.state.input;
    }
  },
  methods: {
    add() {
      this.$store.commit('add');
    },
    remove(task) {
      this.$store.commit('remove', task);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 42px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.list {
  border: 15px goldenrod groove;
  border-radius: 20px;
  background-color: #fff6a2;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 10px;
}
</style>

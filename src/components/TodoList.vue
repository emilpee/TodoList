<template>
  <div class="list">
    <h1>To Do List</h1>
    <ul>
      <li v-for="task in tasks" v-text="task.task" :key="task.id"> </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

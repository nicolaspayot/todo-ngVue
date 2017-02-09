<template>
  <header class="header">
    <h1>todos</h1>
    <TodoTextInput
      v-bind:newTodo="true"
      v-bind:placeholder="'What needs to be done?'"
      v-on:save="handleSave" />
  </header>
</template>

<script>
import TodoTextInput from './TodoTextInput.vue';

export default {
  components: {
    TodoTextInput
  },
  props: {
    onSave: Function
  },
  methods: {
    handleSave(text) {
      this.onSave(text);
    }
  }
};
</script>

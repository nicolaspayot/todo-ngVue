<template>
  <input
    ref="input"
    v-bind:class="{ 'edit': editing, 'new-todo': newTodo }"
    v-model="value"
    v-on:keypress.13="handleSubmit()"
    v-on:blur="handleBlur()"
    v-bind:placeholder="placeholder"
    type="text">
</template>

<script>
export default {
  props: {
    placeholder: String,
    newTodo: Boolean,
    editing: {type: Boolean, default: false },
    text: { type: String, default: '' },
    onSave: Function
  },
  mounted() {
    if (this.$refs.input) {
      this.$refs.input.focus()
    }
  },
  data() {
    return {
      value: this.text
    }
  },
  methods: {
    handleBlur() {
      if (!this.newTodo) {
        this.onSave(this.value);
      }
    },
    handleSubmit() {
      this.onSave(this.value);
      if (this.newTodo) {
          this.value = '';
      }
    }
  }
}
</script>

class TodoItemController {
  $onInit() {
    this.editing = false;
  }

  handleDoubleClick() {
    this.editing = true;
  }

  handleSave(text) {
    this.onSave({
      todo: {
        text,
        id: this.todo.id
      }
    });
    this.editing = false;
  }

  handleDestroy(id) {
    this.onDestroy({id});
  }
}

export const TodoItem = {
  template: require('./TodoItem.html'),
  controller: TodoItemController,
  bindings: {
    todo: '<',
    onDestroy: '&',
    onChange: '&',
    onSave: '&'
  }
};

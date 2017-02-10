class TodoItemController {
  /** @ngInject */
  constructor($scope) {
    this.$scope = $scope;
  }

  $onInit() {
    this.editing = false;
    this.handleSave = this.handleSave.bind(this);
  }

  handleDoubleClick() {
    this.editing = true;
  }

  handleSave(text) {
    this.$scope.$apply(() => {
      this.onSave({
        todo: {
          text,
          id: this.todo.id
        }
      });
      this.editing = false;
    });
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

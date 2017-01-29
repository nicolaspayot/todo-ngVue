class HeaderController {
  /** @ngInject */
  constructor(todoService, $scope) {
    this.$scope = $scope;
    this.todoService = todoService;
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.$scope.$apply(() => {
        this.todos = this.todoService.addTodo(text, this.todos);
      });
    }
  }
}

export const Header = {
  template: require('./Header.html'),
  controller: HeaderController,
  bindings: {
    todos: '='
  }
};

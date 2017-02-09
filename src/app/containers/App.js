import {SHOW_ALL} from '../constants/TodoFilters';
import {initialTodo} from '../todos/todos';

class AppController {
  /** @ngInject */
  constructor($scope, todoService) {
    this.$scope = $scope;
    this.todoService = todoService;
    this.onSave = this.onSave.bind(this);
  }

  $onInit() {
    this.todos = [initialTodo];
    this.filter = SHOW_ALL;
  }

  onSave(text) {
    this.$scope.$apply(() => {
      this.todos = this.todoService.addTodo(text, this.todos);
    });
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};

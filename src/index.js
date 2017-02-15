import angular from 'angular';
import Vue from 'vue';
import 'ngVue';
import 'todomvc-app-css/index.css';

import {TodoService} from './app/todos/todos';
import {App} from './app/containers/App';
import {Header} from './app/components/Header';
import {MainSection} from './app/components/MainSection';
import TodoTextInput from './app/components/TodoTextInput.vue';
import {TodoItem} from './app/components/TodoItem';
import {Footer} from './app/components/Footer';

import './index.css';

angular
  .module('app', ['ngVue'])
  .service('todoService', TodoService)
  .component('app', App)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection)
  .value('TodoTextInput', Vue.component('TodoTextInput', TodoTextInput))
  .component('todoItem', TodoItem);

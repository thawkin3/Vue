Vue.directive('sortable', {
  inserted: function (el, binding) {
    var sortable = new Sortable(el, binding.value || {});
  }
});

Vue.component('todo-item', {
  template: '\
    <li>\
      <input type="checkbox" />\
      <span class="todoText" v-show="!editing">{{ title }}</span>\
      <input type="text" v-model="title" v-show="editing" />\
      <div class="buttons">\
        <button v-on:click="$emit(\'edit\')" class="btn btn-sm btn-primary"><i class="glyphicon glyphicon-edit"></i></button>\
        <button class="handle btn btn-sm btn-success"><i class="glyphicon glyphicon-move"></i></button>\
        <button v-on:click="$emit(\'remove\')" class="btn btn-sm btn-danger"><i class="glyphicon glyphicon-remove"></i></button>\
      </div>\
    </li>\
  ',
  props: ['title', 'editing']
});

var toDoExample = new Vue({
  el: '#todoContainer',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
        editing: false
      },
      {
        id: 2,
        title: 'Take out the trash',
        editing: false
      },
      {
        id: 3,
        title: 'Mow the lawn',
        editing: false
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      if (this.newTodoText.trim() !== "") {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        });
        this.newTodoText = '';
      }
    }
  }
});
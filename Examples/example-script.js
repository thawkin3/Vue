/////////////////////////////////////////
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
});
/////////////////////////////////////////

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});
/////////////////////////////////////////

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});
/////////////////////////////////////////

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' },
      { text: 'Profit' },
    ]
  }
});
/////////////////////////////////////////

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});
/////////////////////////////////////////

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Meat' },
      { id: 3, text: 'Whatever else humans are supposed to eat' }
    ]
  }
});
/////////////////////////////////////////

var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
});
/////////////////////////////////////////

var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // define methods under the `methods` object
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
});
/////////////////////////////////////////

var example3 = new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
});

Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
});
var toDoExample = new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = '';
    }
  }
});
/////////////////////////////////////////

var example5 = new Vue({
  el: '#example-5',
  data: {
    message: 'Hello Vue!'
  }
});
/////////////////////////////////////////

var example6 = new Vue({
  el: '#example-6',
  data: {
    message: ''
  }
});
/////////////////////////////////////////

Vue.component('button-counter', {
  template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
});
var counterEventExample = new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
});
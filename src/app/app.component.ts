import { Component, effect, signal } from '@angular/core';

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

const originalTodos: Todo[] = [
  { id: 1, title: 'Learn signals', done: false },
  { id: 2, title: 'Foo', done: false },
  { id: 3, title: 'Bar', done: false },
  { id: 4, title: 'Klasse', done: false },
  { id: 5, title: 'Klaus', done: false },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myModel: any;

  todos = signal(originalTodos);

  // onlyDoneTodo = computed(() => {
  //   return this.todos().filter((item) => !item.done);
  // });
  // doneTodo = computed(() => {
  //   return this.todos().filter((item) => item.done);
  // });

  title = 'my-app-signals';

  constructor() {
    effect(() => {
      console.log(`The todos is: ${this.todos().map((i) => i.title)})`);
    });
  }

  public addTodo() {
    const nextId = this.todos().length + 1;
    this.todos.update((value) => {
      value.push({ id: nextId, done: false, title: this.myModel });
      return value;
    });
  }

  public delteTodo(id: number) {
    this.todos.update((value) => {
      return value.filter((item) => item.id !== id);
    });
  }

  public done(id: number) {
    this.todos.mutate((value) => {
      const findInex = value.findIndex((item) => item.id === id);
      if (findInex !== -1) {
        value[findInex].done = true;
      }
    });
  }

  public undone(id: number) {
    this.todos.mutate((value) => {
      const findInex = value.findIndex((item) => item.id === id);
      if (findInex !== -1) {
        value[findInex].done = false;
      }
    });
  }

  public replaceAll() {
    this.todos.set([{ id: 1, title: 'bla', done: false }]);
  }
}

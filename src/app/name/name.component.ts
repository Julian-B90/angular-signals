import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent {
  changeName = '';

  firstName = signal('Paul');
  lastName = signal('Irmer');

  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  constructor() {
    effect(() => console.log('Name changed:', this.fullName()));
  }

  setName() {
    this.firstName.set(this.changeName);
  }
}

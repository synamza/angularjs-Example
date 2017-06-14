import { Component, Input } from '@angular/core';
import { User } from './user';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'list-component',
  template: `
  <b>{{title}}</b>
  <div *ngFor="let o of list">
      {{o.id}} | {{o.name}}
  </div><br>`,
})
export class ListComponent {
  @Input() title: string;
  @Input() list: User;
}
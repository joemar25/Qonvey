import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// interface ItemInterface {
//   name: string;
//   description: string;
// }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'ProjectTemplate';
  // items: ItemInterface[] = [
  //   { name: 'Item 1', description: 'This is item 1' },
  //   { name: 'Item 2', description: 'This is item 2' },
  //   { name: 'Item 3', description: 'This is item 3' },
  // ];
}

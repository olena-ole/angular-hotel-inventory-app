import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello from template!</h1>
  // <p>Angular is Awesome</p>`,
  // styleUrls: ['./app.component.scss'],
  styles: [`h1 {color: red;}`],
})
export class AppComponent {
  title = 'hotelinventory';

  role = 'Admin';
}

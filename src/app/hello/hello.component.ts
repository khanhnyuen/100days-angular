import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [RouterOutlet],
  template: '<h1>Hello {{name}} Gay</h1>',
  styles: [``]
})
export class HelloComponent {
  @Input() name !: string;

    ngOnInit(){
      console.log('Hello init')
    }

    ngOnDestroy(){
      console.log('Hello Destroy')
    }
}

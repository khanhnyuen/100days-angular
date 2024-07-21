import { Component, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from '../hello/hello.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-day1',
  standalone: true,
  imports: [
    RouterOutlet,
    HelloComponent,
    FormsModule,
    CommonModule
  ], 
  templateUrl: './day1.component.html',
  styleUrl: './day1.component.css'
})
export class Day1Component {
  name = 'Angular '+ VERSION.major;
  inputType = 'text';
  show =false;
  user = {
    name:'Chau',
    age:16
  }

  handler() {
    console.log('hello world!',event);
  }
  
}

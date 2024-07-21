import { Component } from '@angular/core';
import { HelloComponent } from '../hello/hello.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-day5',
  standalone: true,
  imports: [HelloComponent,CommonModule],
  templateUrl: './day5.component.html',
  styleUrl: './day5.component.css'
})
export class Day5Component {
  users = [
    
  ]

  tags = ['angular','typescript','100days']
}

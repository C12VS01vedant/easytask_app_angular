import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [], // Removed TaskComponent from imports (it's already the TaskComponent)
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TaskComponent {
  @Input() name?: string; // The input property name can be optional, so no changes needed here
}

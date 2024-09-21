import { Component, Input, Output, EventEmitter } from '@angular/core';

type User = {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'], // Fixed typo: 'styleUrl' -> 'styleUrls'
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>(); // Specify type for EventEmitter

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id); // Emits the user ID
  }
}

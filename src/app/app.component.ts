import { Component, TrackByFunction } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fixed typo: 'styleUrl' -> 'styleUrls'
})
export class AppComponent {
  title = 'my-first-project';
  users = DUMMY_USERS;
  selectedUserId?: string;

  // Correctly initialize the trackByUserId function
  trackByUserId: TrackByFunction<{ id: string; name: string; avatar: string }> =
    (index, user) => {
      return user.id;
    };

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}

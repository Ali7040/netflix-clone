import { Component, inject, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input({ required: true }) userProfileImage: string = '';
  auth = inject(AuthService);
  navList = ['Home', 'TV show', 'News & popular', 'Browse by Language'];
}

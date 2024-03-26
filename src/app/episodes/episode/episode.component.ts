import { Component, inject, input } from '@angular/core';
import { Episode } from '../../types';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.scss',
})
export class EpisodeComponent {
  episode = input<Episode>();
  private readonly router = inject(Router);

  onDetailsClick(): void {
    this.router.navigate(['episodes', this.episode()?.id]);
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { EpisodeComponent } from './episode/episode.component';
import { RouterOutlet } from '@angular/router';
import { EpisodesService } from '../services/episodes.service';
import { Episodes } from '../types';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [EpisodeComponent, RouterOutlet],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss',
})
export class EpisodesComponent implements OnInit {
  readonly episodesService = inject(EpisodesService);
  episodes!: Episodes;

  ngOnInit(): void {
    this.episodesService.getEpisodes().subscribe((response) => {
      this.episodes = response.results;
    });
  }
}

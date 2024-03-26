import { Component, OnInit, inject } from '@angular/core';
import { Episode } from '../../types';
import { EpisodesService } from '../../services/episodes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ep-details',
  standalone: true,
  imports: [],
  templateUrl: './ep-details.component.html',
  styleUrl: './ep-details.component.scss',
})
export class EpDetailsComponent implements OnInit {
  private readonly episodeService = inject(EpisodesService);
  private readonly activatedRoute = inject(ActivatedRoute);
  episode!: Episode;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.episodeService
        .getEpisode(id)
        .subscribe((episode) => (this.episode = episode));
    });
  }
}

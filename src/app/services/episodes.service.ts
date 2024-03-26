import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode, EpisodesRes } from '../types';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  private readonly client = inject(HttpClient);

  getEpisodes(): Observable<EpisodesRes> {
    return this.client.get<EpisodesRes>(
      'https://rickandmortyapi.com/api/episode'
    );
  }

  getEpisode(id: number): Observable<Episode> {
    return this.client.get<Episode>(
      `https://rickandmortyapi.com/api/episode/${id}`
    );
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { Character } from '../../services/types';
import { LifeStatus } from '../../services/constants';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    AsyncPipe,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  character$: Observable<Character | undefined> = of(undefined);

  readonly LifeStatus = LifeStatus;

  private readonly charactersService = inject(CharactersService);
  private readonly activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.character$ = this.charactersService.getCharacter(
      this.activatedRoute.snapshot.params['id'],
    );
  }

  toggleFavorite(id: number): void {}
}

import { Component, OnInit, inject } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../types';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  private readonly characterService = inject(CharactersService);
  private readonly activatedRoute = inject(ActivatedRoute);
  character!: Character;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.characterService
        .getCharacter(id)
        .subscribe((character) => (this.character = character));
    });
  }
}

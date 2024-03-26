import { Component, OnInit, inject } from '@angular/core';
import { CharacterComponent } from './character/character.component';
import { CharactersService } from '../services/characters.service';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    CharacterComponent,
    RouterOutlet,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent implements OnInit {
  private readonly charactersService = inject(CharactersService);
  //Uncomment and assign service characters$ behavior subject to this variable
  characters$ = this.charactersService.characters$;

  ngOnInit(): void {
    this.charactersService.getCharacters();
  }

  handleFilter(event: Event): void {
    const name = (event.target as HTMLInputElement).value;
    this.charactersService.filterCharacters(name);
  }
}

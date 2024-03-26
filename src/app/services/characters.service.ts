import { Injectable, inject } from '@angular/core';
import { Character, Characters, CharactersRes } from '../types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private readonly client = inject(HttpClient);

  getCharacters(): Observable<CharactersRes> {
    return this.client.get<CharactersRes>(
      'https://rickandmortyapi.com/api/character'
    );
  }

  getCharacter(id: number): Observable<Character> {
    return this.client.get<Character>(
      `https://rickandmortyapi.com/api/character/${id}`
    );
  }
}

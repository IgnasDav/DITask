import { Component, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Character } from '../../services/types';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export class CharacterComponent {
  character = input<Character>();
  private readonly router = inject(Router);

  onDetailsClick(): void {
    this.router.navigate(['characters', this.character()?.id]);
  }

  getComputedStyles() {
    return {
      ['background-image']: `url(${this.character()?.image})`,
      ['background-size']: `cover`,
    };
  }
}

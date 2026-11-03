import { Component, input, output } from '@angular/core';
import { CharacterDetailResponse } from '../../interfaces/character-detail-response';

@Component({
  imports: [],
  selector: 'app-episode-item-component',
  styleUrl: './episode-item-component.css',
  templateUrl: './episode-item-component.html',
})
export class EpisodeItemComponent {
  character = input<CharacterDetailResponse>();

  characterClicked = output<number>();

  emitCharacterClicked() {
    this.characterClicked.emit(this.character()!.id);
  }
}
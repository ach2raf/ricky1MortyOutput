import { Component, inject, OnInit, signal } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterService } from '../../services/character-service';
import { CharacterDetailResponse } from '../../interfaces/character-detail-response';
import { EpisodeItemComponent } from '../episode-item-component/episode-item-component';
import { CharacterModal } from '../character-modal/character-modal';

@Component({
  imports: [EpisodeItemComponent],
  selector: 'app-episode-list-component',
  styleUrl: './episode-list-component.css',
  templateUrl: './episode-list-component.html',
})
export class EpisodeListComponent implements OnInit {

  characterService = inject(CharacterService);
  characterList = signal<CharacterDetailResponse[]>([]);
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.characterService.getAll().subscribe(resp => {
      this.characterList.set(resp.results);
    });
  }

  openCharacterModal(id: number) {
    this.characterService.getOne(id).subscribe(resp => {

      const modalRef = this.modalService.open(CharacterModal);
      modalRef.componentInstance.characterDetail = resp;
    });
  }
}
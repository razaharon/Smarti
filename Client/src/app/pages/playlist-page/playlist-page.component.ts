import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SongFormModalComponent } from 'src/app/components/song-form-modal/song-form-modal.component';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.css']
})
export class PlaylistPageComponent {

  constructor(private modalService: NgbModal) { }

  public addSong(): void {
    this.modalService.open(SongFormModalComponent);
  }
}

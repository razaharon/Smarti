import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/interfaces/song';
import { SongsService } from 'src/app/services/songs.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SongFormModalComponent } from '../song-form-modal/song-form-modal.component';

@Component({
  selector: 'app-playlist-table',
  templateUrl: './playlist-table.component.html',
  styleUrls: ['./playlist-table.component.css']
})
export class PlaylistTableComponent implements OnInit {

  public songs: Song[];

  constructor(
    private songService: SongsService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.songService.songs.subscribe(songs => this.songs = songs);
  }

  public showMore(event): void {
    event.target.lastChild.lastChild.style.visibility = 'visible';
  }

  public hideMore(event): void {
    event.target.lastChild.lastChild.style.visibility = 'hidden';
  }

  public viewSong(song: Song): void {
    const modalRef = this.modalService.open(SongFormModalComponent);
    modalRef.componentInstance.song = song;
  }

}

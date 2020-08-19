import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Song } from 'src/app/interfaces/song';
import { SongsService } from 'src/app/services/songs.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-song-form-modal',
  templateUrl: './song-form-modal.component.html',
  styleUrls: ['./song-form-modal.component.css']
})
export class SongFormModalComponent implements OnInit {

  @Input()
  public song: Song;

  public songForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private _song: SongsService,
    private _formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    if (!this.song) {
      this.song = this._song.generateEmptySong();
    }
    this.buildForm();
  }

  private buildForm(): void {
    this.songForm = this._formBuilder.group({
      id: [this.song.id || null],
      title: [this.song.title || '', Validators.required],
      author: [this.song.author || '', Validators.required],
      genre: [this.song.genre || '', Validators.required]
    })
  }

  public onSubmit(form): void {
    if (form.valid) {
      if (this.song.id) {
        this._song.updateSong(form.value).then(song => this.activeModal.close('submit'));
      } else {
        this._song.addSong(form.value).then(song => this.activeModal.close('submit'));
      }
    }
  }

  public onDelete(): void {
    this._song.deleteSong(this.song.id).then(() => this.activeModal.close('delete'));
  }

}

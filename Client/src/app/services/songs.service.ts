import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Song} from '../interfaces/song';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  private url: string = environment.api + 'songs';
  public readonly songs: BehaviorSubject<Song[]> = new BehaviorSubject<Song[]>(null);

  constructor(private http: HttpClient) {
    this.getAllSongs();
  }

  public async getAllSongs(): Promise<Song[]> {
    const songs = await this.http.get<Song[]>(this.url).toPromise();
    this.songs.next(songs);
    return songs;
  }

  public getSongById(id: number): Promise<Song> {
    return this.http.get<Song>(this.url + '/' + id).toPromise();
  }

  public async addSong(newSong: Song): Promise<Song> {
    const song = await this.http.post<Song>(this.url, newSong).toPromise();
    this.songs.next([...this.songs.getValue(), song]);
    return song;
  }

  public async updateSong(updatedSong: Song): Promise<Song> {
    const song = await this.http.put<Song>(this.url + '/' + updatedSong.id, updatedSong).toPromise();
    const songs = this.songs.getValue();
    const index = songs.findIndex(s => s.id === song.id);
    songs[index] = song;
    this.songs.next(songs);
    return song;
  }

  public async deleteSong(songId: number): Promise<void> {
    await this.http.delete(this.url + '/' + songId).toPromise();
    const songs = this.songs.getValue().filter(s => s.id !== songId);
    this.songs.next(songs);
    return;
  }

  public generateEmptySong(): Song {
    return {title: '', author: '', genre: ''};
  }
}

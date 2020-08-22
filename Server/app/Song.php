<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    protected $fillable = ['title','author','genre'];

    public static function getAll(){
        return self::all();
    }

    public static function getById($id){
        return self::find($id);
    }

    public static function add($song) {
        return self::create($song);
    }

    public static function updateById($newSong,$id) {
        $song = self::findOrFail($id);
        $song->update($newSong);
        return $song;
    }

    public static function deleteById($id) {
        $song = self::findOrFail($id);
        return $song->delete();
    }
}

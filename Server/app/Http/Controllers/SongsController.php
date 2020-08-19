<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Song;

class SongsController extends Controller
{
    public function index() {
        return Song::all();
    }
    public function show($id) {
        return Song::find($id);
    }
    public function store(Request $request) {
        return Song::create($request->all());
    }
    public function update(Request $request, $id) {
        $song = Song::findOrFail($id);
        $song->update($request->all());
        return $song;
    }
    public function delete($id){
        $song = Song::findOrFail($id);
        return $song->delete();
    }
}

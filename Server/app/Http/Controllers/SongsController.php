<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Song;

class SongsController extends Controller
{
    public function index() {
        return Song::getAll();
    }
    public function show(Song $song): Song {
        return $song;
    }
    public function store(Request $request) {
        return Song::add($request->all());
    }
    public function update(Request $request, $id) {
       return Song::updateById($request->all(), $id);
    }
    public function delete($id){
        return Song::deleteById($id);
    }
}

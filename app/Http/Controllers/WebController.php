<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class WebController extends Controller
{

    public function home(){

        $posts = Post::orderBy('created_at', 'DESC')->limit(3)->get();

        $head = $this->seo->render(
            'Home',
            'Página inicial do portal',
            '',
            ''
        );

        return view('pages.home', [
            'head' => $head,
            'posts' => $posts
        ]);
    }

    public function course(){
        return view('pages.course');
    }

    public function blog(){

        $posts = Post::orderBy('created_at', 'DESC')->get();

        return view('pages.blog',[
            'posts' => $posts
        ]);
    }

    public function contact(){
        return view('pages.contact');
    }

    public function article($uri){
        $post = Post::where('uri', '=', $uri)->first();

        return view('pages.article',[
            'post' =>$post
        ]);
    }
}

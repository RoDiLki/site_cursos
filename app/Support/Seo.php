<?php


namespace App\Support;


use CoffeeCode\Optimizer\Optimizer;

class Seo
{
    private $optimizer;

    public function __construct()
    {
        $this->optimizer = new Optimizer();

        $this->optimizer->openGraph(
            env('APP_NAME'),
            'pt-br',
            'article'
        );
    }

    public function render(
        string $title,
        string $description,
        string $url,
        string $image,
        bool $follow = true)
    {
        $this->optimizer->optimize($title,$description,$url,$image,$follow)->render();
    }
}

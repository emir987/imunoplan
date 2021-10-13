<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    protected $blogsOnPage = 3;

    public function index(Request $request)
    {
        DB::enableQueryLog();

        $limit = $this->blogsOnPage;
        $page = $request->get('page', 0);
        $offset = $page * $limit;
        $category = $request->category;
        $tag = $request->tag;
        $search = $request->search;

        $blogs = Blog::select(
            'blogs.id',
            'blogs.created_at',
            'blogs.title',
            'blogs.feature_image',
            DB::raw('substring(blogs.content, 1, 200) AS content'),
        )
            ->join('blog_categories', 'blog_categories.blog_id', '=', 'blogs.id')
            ->join('blog_tags', 'blog_tags.blog_id', '=', 'blogs.id')
            ->when($category, function ($q) use ($category) {
                $q->where('blog_categories.category', $category);
            })
            ->when($tag, function ($q) use ($tag) {
                $q->where('blog_tags.tag', $tag);
            })
            ->when($search, function ($q) use ($search) {
                $q->where('blogs.title', 'LIKE', '%' . $search . '%');
            })
            ->orderBy('created_at', 'desc')
            ->limit($limit)
            ->offset($offset)
            ->distinct()
            ->get();

        $total = Blog::join('blog_categories', 'blog_categories.blog_id', '=', 'blogs.id')
            ->join('blog_tags', 'blog_tags.blog_id', '=', 'blogs.id')
            ->when($category, function ($q) use ($category) {
                $q->where('blog_categories.category', $category);
            })
            ->when($tag, function ($q) use ($tag) {
                $q->where('blog_tags.tag', $tag);
            })
            ->when($search, function ($q) use ($search) {
                $q->where('blogs.title', 'LIKE', '%' . $search . '%');
            })
            ->distinct('blogs.id')
            ->count();

        $totalPages = $total / $this->blogsOnPage;

        if ($request->first) {
            $categories = DB::table('blog_categories')->distinct()->pluck('category');

            $tags = DB::table('blog_tags')->distinct()->pluck('tag');

            $recent = Blog::select('id', 'title')->orderBy('created_at', 'desc')->limit(3)->get();

            $titles = Blog::select('id', 'title')->get();

            return response()->json(['status' => 'success', 'blogs' => $blogs, 'titles' => $titles, 'pages' => $totalPages, 'page' => $page, 'totalResults' => $total, 'categories' => $categories, 'tags' => $tags, 'recent' => $recent, 'query' => DB::getQueryLog()]);
        }

        return response()->json(['status' => 'success', 'blogs' => $blogs,  'pages' => $totalPages, 'page' => $page, 'totalResults' => $total, 'query' => DB::getQueryLog()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|max:80',
            'content' => 'required|min:30',
            'feature_image' => 'required|max:2048'
        ]);

        $path = $request->file('feature_image')->store('/assets/blog');
        $validatedData['feature_image'] = '/' . $path;
        $blog = Blog::create($validatedData);

        $images = json_decode($request->blog_images);
        $blog_images = [];
        for ($i = 0; $i < sizeof($images); $i++) {
            array_push($blog_images, ['blog_id' => $blog->id, 'image' => $images[$i]]);
        }
        DB::table("blog_images")->insert($blog_images);

        $categories = json_decode($request->categories);
        $blog_categories = [];
        for ($i = 0; $i < sizeof($categories); $i++) {
            array_push($blog_categories, ['blog_id' => $blog->id, 'category' => $categories[$i]]);
        }
        DB::table("blog_categories")->insert($blog_categories);

        $tags = json_decode($request->tags);
        $blog_tags = [];
        for ($i = 0; $i < sizeof($tags); $i++) {
            array_push($blog_tags, ['blog_id' => $blog->id, 'tag' => $tags[$i]]);
        }
        DB::table("blog_tags")->insert($blog_tags);
    }

    public function uploadBlogImage(Request $request)
    {
        $image = $request->file('image');

        $path = $image->store('/assets/blog');

        return response()->json(['url' => '/' . $path, 'status' => 'success']);
    }

    public function deleteBlogImage(Request $request)
    {
        Storage::delete($request->image);

        return response()->json(['status' => 'success', 'url' => $request->image]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $categories = DB::table('blog_categories')->distinct()->pluck('category');

        $recent = Blog::select('id', 'title')->orderBy('created_at', 'desc')->limit(3)->get();

        $blog = Blog::find($id, ['title', 'created_at', 'content']);

        return response()->json(['blog' => $blog, 'status' => 1, 'categories' => $categories, 'recent' => $recent]);
    }
}

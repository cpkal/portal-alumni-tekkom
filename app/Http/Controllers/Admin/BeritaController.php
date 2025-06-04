<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Stringable;
use Illuminate\Support\Str;

class BeritaController extends Controller
{
    public function tabelBerita()
    {
        $beritas = News::paginate(10);
        return view('admin.berita.tabelBerita', compact('beritas'));
    }

    public function createBerita()
    {
        return view('admin.berita.formBerita', ['beritas' => null]);
    }



    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable',
        ]);

        $slug = Str::slug($request->title);

        $news = News::create([
            'title' => $request->title,
            'content' => $request->content,
            'author' => Auth::user()->name ?? $request->author,
            'slug' => $slug,
            'is_published' => $request->is_published == 'on' ? true : false,
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('news_images', 'public');
            $news->image = $imagePath;
            $news->save();
        }

        return redirect()->route('admin.berita.tabelBerita')->with('success', 'Berita berhasil ditambahkan!');
    }

    public function editBerita($id)
    {
        $beritas = News::findOrFail($id);
        return view('admin.berita.formBerita', compact('beritas'));
    }

    public function updateBerita(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable',
        ]);

       $slug = Str::slug($request->title);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('news_images', 'public');
            $request->merge(['image' => $imagePath]);
        }

        $beritas = News::findOrFail($id);
        $beritas->update([
            'title' => $request->title,
            'content' => $request->content,
            'author' => $request->author,
            'slug' => $slug ?? $beritas->slug,
            'is_published' => $request->is_published == 'on' ? true : false,
        ]);

        return redirect()->route('admin.berita.tabelBerita')->with('success', 'Berita berhasil diperbarui.');
    }


    public function destroy($id)
    {
        $beritas = News::findOrFail($id);
        $beritas->delete();

        return redirect()->route('admin.berita.tabelBerita')->with('success', 'Berita berhasil dihapus.');
    }
}

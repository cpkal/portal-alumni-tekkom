<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Schema::create('forum_tags', function (Blueprint $table) {
        //     $table->id();
        //     // relation with forumquestion
        //     $table->foreignId('forum_question_id')->constrained('forum_questions')->onDelete('cascade');
        //     $table->string('name');
        //     $table->timestamps();
        // });

        // // drop column tags on forum_questions
        // Schema::table('forum_questions', function (Blueprint $table) {
        //     $table->dropIfExists('tags');
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('forum_tags');
        
    }
};

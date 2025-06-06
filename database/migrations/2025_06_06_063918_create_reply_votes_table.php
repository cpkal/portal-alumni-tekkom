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
        Schema::create('reply_votes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('forum_reply_id')
                ->constrained('forum_replies')
                ->onDelete('cascade');
            $table->foreignId('alumni_id')
                ->constrained('alumnis')
                ->onDelete('cascade');
            $table->enum('vote_type', ['upvote', 'downvote'])
                ->comment('Type of vote: upvote or downvote');
            $table->unique(['forum_reply_id', 'alumni_id'], 'unique_reply_vote'); // Ensure one vote per reply per alumni
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reply_votes');
    }
};

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
        Schema::create('forum_replies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('forum_question_id')->constrained('forum_questions')->onDelete('cascade');
            $table->foreignId('alumni_id')->constrained('alumnis')->onDelete('cascade');
            $table->text('description')->nullable();
            $table->string('status')->default('active'); // active, inactive
            // upvote
            $table->integer('upvotes')->default(0);
            // downvote
            $table->integer('downvotes')->default(0);
            // is_best_answer
            $table->boolean('is_best_answer')->default(false);
            // replying reply
            $table->foreignId('replying_reply_id')->nullable()->constrained('forum_replies')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('forum_replies');
    }
};

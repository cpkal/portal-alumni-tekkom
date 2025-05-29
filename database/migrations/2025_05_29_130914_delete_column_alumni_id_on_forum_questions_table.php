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
        // drop column alumni_id on forum_questions
        Schema::table('forum_questions', function (Blueprint $table) {
            // Check if the column exists before dropping
            if (Schema::hasColumn('forum_questions', 'alumni_id')) {
                $table->dropForeign(['alumni_id']); // Drop foreign key constraint if it exists
                $table->dropColumn('alumni_id'); // Drop the alumni_id column
            }
        });

        // alter user_id on forum_questions
        Schema::table('forum_questions', function (Blueprint $table) {
            // add column user_id
            $table->unsignedBigInteger('user_id');
            // add foreign key constraint for user_id
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('forum_questions', function (Blueprint $table) {
            // Recreate the alumni_id column
            $table->unsignedBigInteger('alumni_id')->nullable()->after('id');
            $table->foreign('alumni_id')->references('id')->on('alumnis')->onDelete('cascade');
        });

        Schema::table('forum_questions', function (Blueprint $table) {
            // Change user_id back to unsignedBigInteger
            $table->unsignedBigInteger('user_id')->change();
            // Remove foreign key constraint for user_id
            $table->dropForeign(['user_id']);
        });
    }
};

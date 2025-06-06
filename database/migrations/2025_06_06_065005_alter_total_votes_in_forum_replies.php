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
        Schema::table('forum_replies', function (Blueprint $table) {
            // Add total_votes column to forum_replies table
            $table->integer('total_votes')->default(0)->after('description')
                ->comment('Total votes for the reply, calculated as upvotes - downvotes');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('forum_replies', function (Blueprint $table) {
            // Remove total_votes column from forum_replies table
            $table->dropColumn('total_votes');
        });
    }
};

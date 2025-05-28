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
        Schema::table('events', function (Blueprint $table) {
            // Drop the alumni_id column
            $table->dropForeign(['alumni_id']);
            $table->dropColumn('alumni_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('events', function (Blueprint $table) {
            // Recreate the alumni_id column
            $table->foreignId('alumni_id')->constrained('alumnis')->onDelete('cascade');
        });
    }
};

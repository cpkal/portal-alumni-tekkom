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
            // Alter the event_time column to allow null values
            $table->time('event_time')
                ->nullable()
                ->default('00:00')
                ->comment('Waktu acara, format HH:MM');
        });

        // If you need to set a default value for existing rows, you can do it here
        // DB::table('events')->whereNull('event_time')->update(['event_time' => '00:00:00']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('events', function (Blueprint $table) {
            // Drop the event_time column if it exists
            $table->dropColumn('event_time');
        });
    }
};

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
            $table->boolean('public_can_register')
                ->default(false)
                ->comment('Apakah publik dapat mendaftar untuk acara ini?');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('events', function (Blueprint $table) {
            // Drop the public_can_register column if it exists
            $table->dropColumn('public_can_register');
        });
    }
};

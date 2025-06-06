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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->foreignId('alumni_id')->constrained('alumnis')->onDelete('cascade');
            $table->string('event_name')->nullable();
            $table->string('event_type')->nullable(); // e.g., seminar, workshop, conference, virtual meeting
            $table->string('event_date')->nullable();
            $table->string('event_location')->nullable();
            $table->string('event_description')->nullable();
            $table->string('event_organizer')->nullable();
            $table->string('event_link')->nullable(); // link to event details or registration
            $table->string('event_image')->nullable(); // link to event image
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};

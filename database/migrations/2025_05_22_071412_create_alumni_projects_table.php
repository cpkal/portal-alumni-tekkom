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
        Schema::create('alumni_projects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('alumni_id')->constrained('alumnis')->onDelete('cascade');
            $table->string('project_name')->nullable();
            // description
            $table->text('description')->nullable();
            // start_date
            $table->string('start_date')->nullable();
            // end_date
            $table->string('end_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alumni_projects');
    }
};

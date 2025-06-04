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
        Schema::table('job_vacancies', function (Blueprint $table) {
            // Alter the poster column to be nullable
            $table->string('poster')->nullable();
        });
        
        // If you need to add a default value, uncomment the line below
        // $table->string('poster')->default('default_poster.jpg')->change();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('job_vacancies', function (Blueprint $table) {
            // Revert the poster column to be non-nullable
            $table->dropColumn('poster');
        });
    }
};

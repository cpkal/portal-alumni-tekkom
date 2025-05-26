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
        Schema::create('job_vacancies', function (Blueprint $table) {
            $table->id();
            $table->string('job_title');
            // job qualifications
            $table->text('qualifications')->nullable();
            $table->text('job_description')->nullable();
            // company name
            $table->string('company_name');
            // employment_type
            $table->enum('employment_type', ['full_time', 'part_time', 'internship', 'freelance']);
            // job type
            $table->enum('job_type', ['remote', 'on_site', 'hybrid']);
            // link to apply
            $table->string('apply_link');
            // location
            $table->string('location');
            // salary start
            $table->decimal('salary_start', 10, 2)->nullable();
            // salary end
            $table->decimal('salary_end', 10, 2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_vacancies');
    }
};

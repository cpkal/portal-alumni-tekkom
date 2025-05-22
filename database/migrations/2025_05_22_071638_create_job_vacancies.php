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
            $table->string('job_title')->nullable();
            // job qualifications
            $table->text('qualifications')->nullable();
            $table->text('job_description')->nullable();
            // company name
            $table->string('company_name')->nullable();
            // employment_type
            $table->enum('employment_type', ['full_time', 'part_time', 'internship', 'freelance'])->nullable();
            // job type
            $table->enum('job_type', ['remote', 'on_site', 'hybrid'])->nullable();
            // link to apply
            $table->string('apply_link')->nullable();
            // location
            $table->string('location')->nullable();
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

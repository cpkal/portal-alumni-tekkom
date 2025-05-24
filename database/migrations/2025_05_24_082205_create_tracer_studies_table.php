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
        Schema::create('tracer_studies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            // personal info
            $table->string('full_name');
            $table->string('nim');
            $table->string('enrollment_year');
            $table->string('graduation_year');
            $table->string('undergraduate_thesis_title')->nullable();
            $table->string('address');
            $table->string('active_phone_number');
            $table->string('email');

            // social media
            $table->string('github_name')->nullable();
            $table->string('linkedin_name')->nullable();
            $table->string('instagram_name')->nullable();

            // further study info
            $table->string('is_continuing_study');
            $table->string('institution_name')->nullable();
            $table->string('major')->nullable();
            $table->string('education_level')->nullable();
            $table->boolean('is_further_study_related_to_major')->nullable();

            // career info
            $table->string('is_continuing_working');
            $table->string('company_name')->nullable();
            $table->string('company_address')->nullable();
            $table->string('job_position')->nullable();
            $table->string('company_business_field')->nullable();
            // | Value (Bisa disimpan di DB) | Label yang Ditampilkan |
// | --------------------------- | ---------------------- |
// | `1`                         | Kurang dari 1 bulan    |
// | `2`                         | 1 – < 3 bulan          |
// | `3`                         | 3 – < 6 bulan          |
// | `4`                         | 6 – < 12 bulan         |
// | `5`                         | 1 – < 2 tahun          |
// | `6`                         | 2 tahun atau lebih     |

            $table->enum('wait_time_first_job', [1,2,3,4,5,6]);
            $table->boolean('is_job_related_to_major')->nullable();
            $table->decimal('monthly_salary',10,2)->default(0)->nullable();

            // education evalution
            // likert scale
            $table->enum('study_satisfaction', [1,2,3,4]);
            $table->enum('curriculum_suitability', [1,2,3,4]);
            $table->enum('facilities_satisfaction', [1,2,3,4]);
            $table->boolean('competency_suitability');
            $table->text('suggestion')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tracer_studies');
    }
};

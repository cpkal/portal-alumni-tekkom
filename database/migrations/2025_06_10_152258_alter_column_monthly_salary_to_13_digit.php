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
        Schema::table('tracer_studies', function (Blueprint $table) {
            //alter column monthly_salary to 13_digit
            $table->decimal('monthly_salary', 13, 2)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('13_digit', function (Blueprint $table) {
            // revert column monthly_salary to 10_digit
            $table->decimal('monthly_salary', 10, 2)->change();
        });
    }
};

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
        Schema::table('alumnis', function (Blueprint $table) {
            // Add the new profile_image column with a default value
            $table->string('profile_image')->nullable()->after('fullname');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('alumnis', function (Blueprint $table) {
            // Drop the profile_image column if it exists
            if (Schema::hasColumn('alumnis', 'profile_image')) {
                $table->dropColumn('profile_image');
            }
        });
    }
};

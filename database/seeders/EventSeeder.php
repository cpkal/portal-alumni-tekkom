<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('events')->insert([
            [
                'event_name' => 'Seminar AI dan Data Science',
                'event_type' => 'Seminar',
                'event_date' => '2025-06-15',
                'event_location' => 'Universitas Teknologi Bandung',
                'event_description' => 'Seminar membahas perkembangan terbaru dalam bidang AI dan Data Science.',
                'event_organizer' => 'Himpunan Alumni Informatika',
                'event_link' => 'https://example.com/seminar-ai',
                'event_image' => 'https://example.com/images/seminar-ai.jpg',
            ],
            [
                'event_name' => 'Workshop Machine Learning',
                'event_type' => 'Workshop',
                'event_date' => '2025-07-10',
                'event_location' => 'Online via Zoom',
                'event_description' => 'Pelatihan dasar machine learning bagi pemula.',
                'event_organizer' => 'Komunitas Data Enthusiasts',
                'event_link' => 'https://example.com/workshop-ml',
                'event_image' => 'https://example.com/images/workshop-ml.jpg',
            ],
            [
                'event_name' => 'Konferensi Nasional Teknologi',
                'event_type' => 'Conference',
                'event_date' => '2025-08-20',
                'event_location' => 'Jakarta Convention Center',
                'event_description' => 'Konferensi nasional yang membahas berbagai topik teknologi terbaru.',
                'event_organizer' => 'Asosiasi Alumni Teknik',
                'event_link' => 'https://example.com/konferensi-teknologi',
                'event_image' => 'https://example.com/images/konferensi-teknologi.jpg',
            ],
        ]);
    }
}

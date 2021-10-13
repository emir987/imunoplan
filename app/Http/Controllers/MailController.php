<?php

namespace App\Http\Controllers;

use App\Mail\SendMail;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendEmail()
    {
        $details = [
            'title' => 'Mail from Emir',
            'body' => 'Tijelo.'
        ];
        Mail::to("zivkovicj813@gmail.com")->send(new SendMail($details));
        return 'email sent';
    }
}

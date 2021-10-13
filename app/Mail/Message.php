<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Message extends Mailable
{
    use Queueable, SerializesModels;
    public $details = [];
    public $img_url;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($details, $img_url)
    {
        $this->details = $details;
        $this->img_url = $img_url;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        return $this->subject('Uspješno poslata poruka')->markdown('emails.email');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Message as Mail_message;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = DB::select('select users.name,users.photo, users.status, messages.* from users JOIN messages on (messages.to = users.id or messages.from = users.id)and users.id !=' . Auth::id() . ' where messages.id in (
                select MAX(id)
                from `messages`
                where `from` = ' . Auth::id() . ' or `to` = ' . Auth::id() . '
                group by LEAST(messages.to, messages.from),GREATEST(messages.to, messages.from))');

        $allNutricionist = DB::select("select id, name, photo, status from users where (status='Nutricionista' or status='Admin') and users.id !=" . Auth::id());

        if (empty($users)) {
            $users = [(object) ['empty' => true]];
        }
        return view('messages', compact('users', 'allNutricionist'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $message = new Message();
        if (request('email')) $message->email = request('email');;
        $message->message = request('message');
        if (Auth::check()) $message->from = Auth::id();
        if (request('to')) $message->to = request('to');
        $message->save();
        if (request('email')) $this->sendEmail(request('email'));
        return $message;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function show($from)
    {
        $messages = Message::where([
            'from' => $from,
            'to' => request('to'),
        ])->orWhere(function ($query) use ($from) {
            $query->where('from', '=', request('to'))
                ->where('to', '=', $from);
        })->orderBy('created_at')->get();

        return compact("messages");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $message)
    {
        Message::where('id', $message)->update(['message' => request('message')]);

        $new = Message::orderBy('updated_at', 'desc')->first();
        return $new;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function destroy($message)
    {
        $messageDeleted = Message::findOrFail($message);
        $messageDeleted->delete();
        return $message;
    }

    public function sendEmail($email)
    {
        if (Auth::check()) {
            $details = [
                'title' => 'Imunoplan',
                'body' => 'Nutricionista će Vam odgovoriti u najkraćem mogućem roku. Poruku možete vidjeti na sajtu.',
                'button' => 'Pogledaj poruku',
                'url' => 'www.imunoplan.me/messages'
            ];
        } else {
            $details = [
                'title' => 'Imunoplan',
                'body' => 'Nutricionista će Vam odgovoriti u najkraćem mogućem roku. Da biste imali pregled konverzacije sa nutricionistom registrujte se na našem sajtu.',
                'button' => 'Registruj se',
                'url' => 'www.imunoplan.me/register'
            ];
        }
        $img_url = env('APP_URL') . "/assets/logo-imunoplan.png";

        Mail::to($email)->send(new Mail_message($details, $img_url));
    }
}

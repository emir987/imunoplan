@component('mail::message')
{{$details['body']}}

@component('mail::button', ['url' => $details['url']])
{{$details['button']}}
@endcomponent

Hvala Vam na povjerenju,<br>
@endcomponent

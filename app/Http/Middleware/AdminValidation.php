<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AdminValidation
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Check user is in specified group here
        if (auth()->user()->status == 'Admin') {
            return $next($request);
        }

        // Display a 403 Forbidden error
        abort(403);
    }
}

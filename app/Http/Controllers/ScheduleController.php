<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use Illuminate\Http\Request;


class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user_id = auth()->id();
        $plans = Schedule::where('user_id', $user_id)->pluck('day');
        return $plans;
    }

    public function getData()
    {
        $user_id = auth()->id();
        $plans = Schedule::where('user_id', $user_id)->orderBy('day')->get();
        return view('plan.registered-users.saved-plans', compact('plans'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        $days_request = request('days');
        $days = json_decode($days_request);
        for ($i = 0; $i < sizeof($days); $i++) {
            $schedule = new Schedule();
            $schedule->day = $days[$i];
            $schedule->name = request('name');
            $schedule->daily_plan = request('plan');
            $schedule->user_id = auth()->id();
            $schedule->save();
        }

        return 'uspjesno';
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($id)
    {
        $days_request = request('days');

        $days = json_decode($days_request);
        $name = request('name');

        $plan = request('plan');
        $schedule = Schedule::whereIn('day', $days)->update(['daily_plan' => $plan, 'name' => $name]);
        return $schedule;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function deleteById($id)
    {
        $schedule = Schedule::find($id)->delete();
        return $schedule;
    }

    public function destroy($id)
    {
        $schedule = Schedule::where('day', $id)->delete();

        return $schedule;
    }
}

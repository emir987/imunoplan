<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input, $photo)
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
        ])->validate();

        $path = '/assets/users/user.svg';

        if ($photo != null) {
            $path = $photo->store('/assets/users');
            $input['photo']->move(public_path('/assets/users'), $path);

        }
    
        return User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'photo' => $path,
            'password' => Hash::make($input['password']),
        ]);
    }
}

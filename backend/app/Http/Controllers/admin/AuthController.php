<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function authenticate(Request $request) {

        $validator = Validator::make($request->all(),[
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }


        // Set token in Cookie
        if($jwt = $request->cookie('jwt')) {
            $request->headers->set('Authorization','Bearer' . $jwt);
        }

        if(Auth::attempt(['email' => $request->email,'password' => $request->password])) {

            $user = User::find(Auth::user()->id);

            if($user->role == 'admin') {

                $token = $user->createToken('token')->plainTextToken;

                // Set jwt cookie
                $cookie = cookie('jwt', $token, 60);

                return response()->json([
                    'status' => 200,
                    'token' => $token,
                    'id' => $user->id,
                    'name' => $user->name
                ], 200)->withCookie($cookie);

            } else {
                return response()->json([
                    'status' => 401,
                    'message' => 'You are not Admin'
                ], 401);
            }

        } else {
            //Unauthorised exception
            return response()->json([
                'status' => 401,
                'message' => 'Check your credentials'
            ], 401);
        }

    }


    public function register(Request $request) {
        return User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password'))
        ]);
    }

    public function login(Request $request) {
        if(!Auth::attempt($request->only('email','password'))) {
            return response()->json([
                'status' => 401,
                'email' => 'Invalid Credentials'
            ], 401);
        }

        $user = User::find(Auth::user()->id);

        $token = $user->createToken('token')->plainTextToken;
        $cookie = cookie('jwt', $token, 60);

        return response()->json([
            'status' => 200,
            'message' => 'Invalid Credentials'
        ], 200)->withCookie($cookie);
    }


    public function logout() {
        $cookie = Cookie::forget('jwt');

        return response()->json([
            'status' => 200,
            'message' => 'Logged out'
        ], 200)->withCookie($cookie);
    }

    // To check user endpoint
    public function user() {
        return response()->json(Auth::user());
    }


}

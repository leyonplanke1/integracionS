<?php
 
namespace App\Http\Controllers\v1;
 
use App\Http\Controllers\Controller;
use App\Models\User;
 
class AlumnosController extends Controller
{
    /**
     * Show the profile for a given user.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    public function getAll()
    {
        $response = new \stdClass();
        $alumnos = [];

        $alumno=new \stdClass();

        $alumno->id="94b05500-6f23-45a7-8cdc-eda3c4139665";
        $alumno->codigo="A001";
        $alumno->nombres="Luis Curo";

        $alumnos[]=$alumno;

        $response->success=true;
        $response->data=$alumnos;

        return response()->json($response,200);
    }
}
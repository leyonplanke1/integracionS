<?

$response = new \stdClass();
$alumnos = [];

$alumno=new \stdClass();

$alumno->id="94b05500-6f23-45a7-8cdc-eda3c4139665";
$alumno->codigo="A001";
$alumno->nombres="Luis Curo";

$alumnos[]=$alumno;

$response->success=true;
$response->data=$alumnos;

echo json_encode($response);
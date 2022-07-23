<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, 
            Access-Control-Allow-Headers, Authorization, X-Requested-With");


$data = json_decode(file_get_contents("php://input"));

$user_name = $data->user_name;
$email = $data->email;
$password = $data->password;

$con = mysqli_connect("localhost", "root", "");

mysqli_select_db($con, "login_sample_db");

if($user_name && $email && $password){
$sql = "insert into users(
    user_name,
    email,
    password
)
values(
    '$user_name',
    '$email',
    '$password'
)";
$result = mysqli_query($con,$sql);

if($results){
    $response['data'] = array(
        'status' => 'valid'
    );
    echo json_encode($response);
}
else{
    $response['data']=array(
        'status' => 'invalid'
    );
    echo json_encode($response);
}
}
?>
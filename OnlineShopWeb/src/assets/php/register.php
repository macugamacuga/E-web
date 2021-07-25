<?php
include_once("connect.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$firstname = trim($request->firstName);
$lastname = trim($request->lastName);
$pwd = mysqli_real_escape_string($con, trim($request->password));
$email = mysqli_real_escape_string($con, trim($request->email));
$sql = "INSERT INTO user(FirstName,LastName,password,Email) VALUES ('$firstname','$lastname','$pwd','$email')";
// $result=mysqli_query($con,$sql) or die(mysqli_error($con));



if ($con->query($sql) === TRUE) {
$authdata = [
'name' => $firstname,
'pwd' => '',
'email' => $email,
'Id' => mysqli_insert_id($con)	
];
echo json_encode("succesful");
}
else {
	if (mysqli_errno($con) == 1062) {
		//  echo json_encode('Duplicate data');
    print 'Email is already registed!';
} else  print 'System error !! try again another time. ';

}
}

?>
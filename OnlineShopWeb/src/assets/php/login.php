<?php
include_once("connect.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
$pwd = mysqli_real_escape_string($con, trim($request->password));
$email = mysqli_real_escape_string($con, trim($request->email));
$sql = "SELECT * FROM user where Email='$email' and password='$pwd'";
$result = mysqli_query($con,$sql);


$count = mysqli_num_rows($result);
if($count==1)
{
    $row = mysqli_fetch_assoc($result);




echo json_encode($row);
}
else
{
    echo  print "User error";

}
}
?>
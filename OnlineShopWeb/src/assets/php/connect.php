<?php
define('DB_Host','localhost');
define('DB_User','root');
define('DB_Pass','');
define('DB_Name','onlineshopweb');
 
 function connect(){
$connect=mysqli_connect(DB_Host, DB_User, DB_Pass, DB_Name);

if($connect->connect_error){
die("failed to connect:". mysqli_connect_error());
}
 mysqli_set_charset($connect,"utf8");
 
return $connect;
 
	 
 }
 $con=connect();
 ?>
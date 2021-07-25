<?php
require 'connect.php';

$addproducts= file_get_contents("php://input");


if(isset($addproducts) && !empty($addproducts))
{
	$request=json_decode($addproducts);
	
	$Name=mysqli_real_escape_string($con, trim($request->Name));
	$Description=mysqli_real_escape_string($con, trim($request->Description));
	$Category=mysqli_real_escape_string($con, trim($request->Category));
	$Price=mysqli_real_escape_string ($con, trim($request->Price));
	
	//$catID="select id FROM productcategory WHERE Category=$Category ";
	
	//echo "php echo"+$request;
	
$sql="INSERT INTO productitem (Name,Description,price,Category)
VALUES
	('$Name','$Description','$Price','4')";


if(mysqli_query($con,$sql))
{
	http_response_code(201);
}
else
{
	http_response_code(422);
	
}
}
else{

}
?>
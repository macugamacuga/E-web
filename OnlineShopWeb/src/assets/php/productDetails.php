<?php
require 'connect.php';
//$product_Id= file_get_contents("php://input");
//$products=[];
 $rows = array();
 $ShoeSize=array();
 
if(isset($_POST['userid']))
{ 
			$trp = mysqli_query($con, "SELECT productitem.Name,productcategory.Category,productitem.Price,productitem.Description,
			(SELECT CONCAT(GROUP_CONCAT(shoesize.ShoeSize))FROM shoesize WHERE shoesize.ProductID=productitem.id ) AS shoesize , 
			(SELECT CONCAT(GROUP_CONCAT(clothsize.ClothSize)) FROM clothsize WHERE clothsize.ProductID=productitem.id) AS clothsize, 
			(SELECT CONCAT(GROUP_CONCAT(color.color)) FROM color WHERE color.ProductID=productitem.id) AS color, 
			(SELECT CONCAT(GROUP_CONCAT(imageurl.imageUrl,imageurl.mainimageurl)) FROM imageurl WHERE imageurl.ProductID=productitem.id  ) AS imageurl 
			FROM `productitem` JOIN productcategory ON productitem.Category=productcategory.id WHERE productitem.id=".$_POST['userid']) ;
   
	$r = mysqli_fetch_assoc($trp);
	
	 // $sql=mysqli_query($con,"SELECT  color FROM color AS color WHERE ProductID=76");
// while($color = mysqli_fetch_assoc($sql)){
	// array_push($r,$color);
// }
 
print json_encode([$r]);


}


?>
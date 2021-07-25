<?php
require 'connect.php';

$products=[];
$sql="SELECT  productitem.id, productitem.Name,productcategory.Category,productitem.Price,
            (SELECT CONCAT(GROUP_CONCAT(imageurl.mainimageUrl)) FROM imageurl WHERE imageurl.ProductID=productitem.id AND NOT imageurl.mainimageurl='') AS mainimageurl
            FROM `productitem`
					
			JOIN productcategory ON productitem.Category=productcategory.id ";


$result = $con->query($sql);
$myArr = array();
if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
$myArr[] = $row;
}
} else {
echo "0 results";
}

$myJSON = json_encode($myArr);
echo $myJSON;
?>
<?php
require 'connect.php';

$products=[];
$sql="select  * FROM productcategory";


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
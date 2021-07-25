<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$conn = new mysqli('localhost','root','','onlineshopweb');
$sql = "SELECT * FROM productitem";
$result = $connect->query($sql);
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
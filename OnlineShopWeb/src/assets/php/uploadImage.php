<?php
require 'connect.php';
print_r($_FILES);
$target_dir="../img/uploads/";
$filedirdb="img/uploads/";

$filename='';
$a=array();
$color_array=array();
$Name=$_POST['pName'];
	$Description=$_POST['Description'];
	$Category=$_POST['Category'];
	$Price=$_POST['Price'];


if(isset($_POST['Color1']) && !empty($_POST['Color1']))
{ array_push($color_array,$_POST['Color1']); }
if(isset($_POST['Color2']) && !empty($_POST['Color2']))
{array_push($color_array, $_POST['Color2']);}
if(isset($_POST['Color3']) && !empty($_POST['Color3']))
{array_push($color_array, $_POST['Color3']);}
if(isset($_POST['Color4']) && !empty($_POST['Color4']))
{array_push($color_array, $_POST['Color4']);}

// array_push($color_array,$_POST['Color1'],$_POST['Color2'], $_POST['Color3'],$_POST['Color4']);

echo"files ".$_POST['pName'];



for($i=0;$i<count($_FILES['img']['name']);$i++){

$filename=$_FILES['img']['name'][$i];
$ImageName=date('Ymdhis');
$target_file=$target_dir.$ImageName.$_FILES ['img']['name'][$i];
$dbtarget_file=$filedirdb.$ImageName.$_FILES ['img']['name'][$i];
array_push($a,$dbtarget_file);
if(move_uploaded_file($_FILES['img']['tmp_name'][$i], $target_file)){
	echo"  \n file uploades successfully" .$target_file;
	

}

}


     $sql="INSERT INTO productitem (Name,Description,price,Category)
     VALUES
	 ('$Name','$Description','$Price','$Category')";
	 $result = mysqli_query($con,$sql) or die(mysqli_error($con));
if($result > 0)
    {
		
	http_response_code(201);
		echo" \n file Product Uploaded  successfully " .$Name;
	$pID=$con->insert_id;
	

		for($i=0;$i<count($a);$i++){
if($i==0){
	$sqlMain="INSERT INTO imageurl (ProductID,mainimageurl)
     VALUES
	('$pID','$a[$i]')";
	$resultMain= $con->query($sqlMain);
	if($resultMain>0){
		echo "  \n upload successfull mainimageurl ";
	}
}
else{			
	$sql2="INSERT INTO imageurl (ProductID,imageUrl)
     VALUES
	('$pID','$a[$i]')";
	$result2= $con->query($sql2);
	if($result2>0){
	
	echo "  \n upload successfull imageurl ".$a[$i];
	}
		}
		}
	
		for($i=0;$i<count($color_array);$i++){
		$sql3="INSERT INTO color (ProductID,color)
        VALUES
	('$pID','$color_array[$i]')";
	
	$result3= $con->query($sql3);
	if($result3>0){
	
	echo " \n upload successfull color ".$color_array[$i];
	}
		}
		
		
		for($i=0; $i<count($_POST['ShoeSize']);$i++){
		 // $shoesize_array=array;
		 // array_push($shoesize_array,$_POST['shoesize'][$i]);
		 
		$sql4="INSERT INTO shoesize (ProductID,ShoeSize)
        VALUES
	('$pID','".$_POST['ShoeSize'][$i]."')";
	
	$result4= $con->query($sql4);
	
   if($result4>0){
		
	echo " \nShoe size uploaded ".$_POST['ShoeSize'][$i] ;
		}
		}
		
		// for($i=0;$i<count($_POST['ClothSize']);$i++){
		
		
		// $sql5="INSERT INTO clothsize (ProductID,ClothSize)
      // VALUES
	// ('$pID','".$_POST['ClothSize'][$i]."')";
	// $result5= $con->query($sql5);
	
	// if($result4 > 0){
		// echo " \n Cloth size ".$_POST['ClothSize'][$i];
		// }
		// }
	
}
else
{
	http_response_code(422);
	
}







?>
<?php include "db.php";

if($_SERVER['REQUEST_METHOD'] == 'POST'){

    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile_no'];
    $DOB = $_POST['dob'];
    $city = $_POST['city'];
    
    $query = "INSERT INTO `login`(`name`, `email`, `mobile_no`, `dob`, `city`) VALUES ('$name','$email','$mobile','$DOB','$city')";  
    $result = mysqli_query($connection,$query);
    if($result){
        $response = "form submitted";
    }else{
        $response = "form is not submitted please check your values";
    }
}

echo $response;

?>
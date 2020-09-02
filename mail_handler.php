<?php
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$lastname=$_POST['lastname'];
		$email=$_POST['email'];
		$msg=$_POST['query'];
		
		$to='tanujbajaj2191@gmail.com';
		$subject='Form Submission';
		$message="Name: ".$name."\n"."Last name: ".$lastname."\n"."Email: ".$email."\n". "Wrote the following: "."\n\n".$msg;
		$headers="From: ".$email;
		
		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
		}
		else{
			echo "something went wrong!";
		}
	}
?>

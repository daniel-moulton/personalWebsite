<?php
    error_reporting(-1);
    ini_set('display_errors', 'On');
    set_error_handler("var_dump");
    // $user_name=$_POST['name'];
    // $user_email=$_POST['email'];
    // $user_message=$_POST['message'];

    // $emailTo = 'dan.moulton@btinternet.com';
	// $email_subject = "New Form submission";
	// $email_body = "You have received a new message from the user $name.\n Here is the message:\n $message";


    // $headers = "Reply-To: $user_email \r";
    // // Send the email!
    // mail($emailTo, $email_subject, $email_body, $headers);

    // Get the user's name, email and message from the form and email it to me
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $emailTo = 'dan.moulton@btinternet.com';
    $email_subject = "New Form submission";
    $email_body = "You have received a new message from the user $name.\n Here is the message:\n $message";
    $headers = "Reply-To: $email \r";
    // Send the email!
    $result=mail($emailTo, $email_subject, $email_body, $headers);
    if($result){
        echo "success";
    }
    else{
        echo "fail";
    }

?>
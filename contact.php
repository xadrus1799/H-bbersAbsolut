<?php 
    $name = $_Post['name'];
    $visitor_email = $_Post['email'];
    $object = $_Post['object'];
    $message =  $_Post['message'];


    $email_from = 'xadrus1@hotmail.de';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n". 
                    "User Email: $email.\n".
                        "User Subject: $object.\n". 
                            "User Message: $message.\n";

    $to = "xadrus1@hotmail.de";
    
    $headers = "From: $email_from \r\n";
    
    $headers .= "Replay-To: $email_subject \r\n";

    mail($to, $email_subject,$email_body,$headers);

    header("Location: contact.html")


?>
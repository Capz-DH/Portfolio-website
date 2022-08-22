<?php 

if(isset($_POST['submit'])) {
    $firstName = $_POST['firstname'];
    $lastName = $_POST['lastname'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "devon@rebirthdigital.co.uk";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from".$firstName.".\n\n".$message;
    

    mail($mailTo, $txt, $headers);
    header("Location: index.html#contact-me");

}

?>
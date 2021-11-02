<?php

require_once('connectdbinreg.php');

$errors = array();
			
		session_start();

        if(isset($_POST['send'])) {

          $firstname = $_POST['firstname'];
          $lastname = $_POST['lastname'];
          $email = $_POST['email'];
          $username = $_POST['username'];
          $password = $_POST['password'];

          $mysqli = mysqli_real_escape_string($firstname, $lastname, $email, $username, $password);

          
//=====================================START VALIDATION FIELD REGISTER===============================//
          
          if (empty($_POST['firstname'])) {
                
                array_push($errors, 'The field First Name is empty!');
          } 

          if (empty($_POST['lastname'])) {
                
              array_push($errors, 'The field Last Name is empty!');
          }

          if (empty($_POST['email'])) {
                
            array_push($errors, 'The field Email is empty!');
          }

          if (empty($_POST['username'])) {
                
            array_push($errors, 'The field Username is empty!');
          }

          if (empty($_POST['password'])) {
                
              array_push($errors, 'The field Password is empty!');
          }

          if (count($errors) == 0) {
            $password = md5($password);
            $sql = "INSERT INTO users (firstName, lastname, email, username, password) VALUES(?,?,?,?,?)";
            $stmtinsert = $db->prepare($sql);
            $result = $stmtinsert->execute([$firstname, $lastname, $email, $username, $password]);

            $_SESSION['username'] = $username;
            $_SESSION['succes'] = '<p style="text-align:center">Welcome '.$username.'! Your account is ACTIVATED!</p>'.'<br>';
            header('location: index.php');

            if($result){

            echo '';

          } else {

            $message = 'ERROR! PLEASE RELOAD!';
            echo "<script type='text/javascript'>alert('$message');</script>";

        	}
    }
        } else {

          unset($_POST['send']);
    }

    if (isset($_GET['logout'])) {

    	session_destroy();
    	unset($_SESSION['username']);
      header('location: index.php');
      
    }
?>
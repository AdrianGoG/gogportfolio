<?php
  require_once('validationreg.php');
  require_once('connectdbinreg.php');
?>

<!DOCTYPE html>
<html>
<head>
   <title>Registration</title>
   <meta charset="utf-8">
   <link rel="stylesheet" href="style/stylee.css">
   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css">
</head>
<body>

    
<form action="registration.php" method="POST">
<div class="login-box">
  <h1>Registration</h1>
  <?php include('errors.php'); ?>
  <div class="textbox">
    <i class="fas fa-user"></i>
    <input type="text" name="firstname" placeholder="First Name" autocomplete="off" required>
</div>
  <div class="textbox">
    <i class="fas fa-user"></i>
    <input type="text" name="lastname" placeholder="Last Name" autocomplete="off" required>
  </div>

  <div class="textbox">
    <i class="fas fa-envelope"></i>
    <input type="Email" name="email" placeholder="Email" autocomplete="off" required>
  </div>

  <div class="textbox">
      <i class="fas fa-user"></i>
      <input type="text" name="username" placeholder="Username" autocomplete="off" required>
    </div>

    <div class="textbox">
        <i class="fas fa-lock"></i>
        <input type="Password" name="password" placeholder="Password" autocomplete="off" required>
</div>
     

  <input type="submit" class="btn" name="send" value="Register"><br>
  <div class="a">
  
</div>

<div class="logreg">
<a class="nav-link" href="login.php">You have account? Log In!</a>
</div>



</form>
</body>
</html>



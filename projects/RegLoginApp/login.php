<?php
require_once('validationlogin.php');
require_once('connectdbinreg.php');
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Login</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style/stylee.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css">
  </head>
  <body>


<form action="login.php" method="POST">

<div class="login-box">
  <h1>Login</h1>
  <?php include('errors.php'); ?>
  <div class="textbox">
    <i class="fas fa-user"></i>
    <input type="text" name="username" placeholder="Username" autocomplete="off" required>
  </div>

  <div class="textbox">
    <i class="fas fa-lock"></i>
    <input type="password" name="password" placeholder="Password" required>
  </div>

  <input type="submit" class="btn" name="send" value="Log In">
</form>


<div class="createacc">
  <a class="nav-link" href="registration.php">You don't have account? Create new account!</a>
</div>

</div>
  </body>
</html>

<?php include('validationreg.php');  ?>
<!DOCTYPE html>
<html>
  <head>
    <title>Home</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style/stylee.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css">
  </head>
  <body>
    <h1 style="text-align: center; color: white">Home</h1>

    
      
      <div class="succes">
          <?php if (isset($_SESSION['succes'])):  ?>
            <div class="errorsucces">
              <h3>
                <?php
                  echo $_SESSION['succes'];
                  unset($_SESSION['succes']);
                ?>
              </h3>
            </div>
      <?php endif ?>


      <?php if(isset($_SESSION["username"])):  ?>
        <p><strong><? echo $_SESSION["username"]; ?></strong></p>
        <p><a href="index.php?logout='1'" class="alog">| Logout <i class="far fa-times-circle"></i></a></p>
      <?php endif ?>

      <div class="boxdetails">
      <a href="login.php">Log In <i class="fas fa-sign-in-alt"></i></a> |
      <a href="registration.php">Create Account <i class="fas fa-user-plus"></i></a>
      </div><br>
      <hr>

        <div id="content">
          <h2>Content</h2>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p> 
        </div><br><br>

        <div id="content">
          <h2>Content</h2>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p> 
        </div><br><br>

        <div id="content">
          <h2>Content</h2>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p> 
        </div><br><br>

        <div id="content">
          <h2>Content</h2>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p> 
        </div><br><br>

      </div>


  </body>
</html>
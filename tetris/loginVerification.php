<?php
  /*
  session_start();
  require 'config.php';
  if(isset($_POST['UserNameLogin']) && isset($_POST['PasswordLogin']))
  {
    $sqlquery="SELECT UserName, Password, Display from Users WHERE UserName='".$_POST['UserNameLogin']."'";
    $returned=mysqli_query($conn, $sqlquery);
    if (mysqli_num_rows($returned)==1)
    {
      $tableRow=mysqli_fetch_array($returned);
      if (password_verify($_POST['PasswordLogin'], $returned['PasswordLogin'])){
        session_regenerate_id();
        $_SESSION['loggedIn']=true;
        $_SESSION['displayScores']==$returned['Display'];
        $_SESSION['userName']==$returned['UserNameLogin'];
        
      }
    }
    else {
      echo "<script type='text/javascript'>alert('Login Error: Invalid username or password.');</script>";
    }
    mysqli_close($conn);
    header("Location: index.php");
  }
  */

  header("Location: index.php");
  ?>
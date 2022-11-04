<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="style.css">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>        
    </head>
    <body>
    <?php
        // ini_set('display_errors', 1);
        // ini_set('display_startup_errors', 1);
        // error_reporting(E_ALL);
        session_start();
        require 'config.php';
        if( isset($_POST['UserName']) && isset($_POST['FirstName']) && isset($_POST['LastName']) && isset($_POST['password']) && isset($_POST['displayScores'])) {
            if( $_POST['displayScores']=='yes') {$displayScores = 1;}
            else { $displayScores=0;}
            $sqlquery="INSERT INTO Users (UserName, FirstName, LastName, Password, Display) VALUES('".$_POST['UserName']."','".$_POST['FirstName']."','".$_POST['LastName']."','".$_POST['password']."','$displayScores');";
            if (mysqli_query($conn, $sqlquery)) {
                $_SESSION['loggedIn'] = true;
                $_SESSION['userName']=$_POST['UserName'];
                $_SESSION['displayScores']=$displayScores;
                unset($_SESSION['usernameTaken']);
                header("Refresh:0");
                die();
            } else {
                $_SESSION['usernameTaken']=true;
                header('Location: register.php');
                die();
            }
        }
        if(isset($_POST['UserNameLogin']) && isset($_POST['PasswordLogin']))
        {
            $sqlquery="SELECT UserName, Password, Display from Users WHERE UserName='".$_POST['UserNameLogin']."';";
            $returned=mysqli_query($conn, $sqlquery);
            if (mysqli_num_rows($returned)==1){
                $tableRow=mysqli_fetch_array($returned);
                if (($_POST['PasswordLogin']) == ($tableRow['Password'])){
                    session_regenerate_id();
                    $_SESSION['loggedIn']=true;
                    if (isset($tablerow['Display'])) {$_SESSION['displayScores']==$tableRow['Display'];}
                    if (isset($tablerow['UserName'])) {$_SESSION['userName']==$tableRow['UserName'];}
                    unset($_SESSION['successfulLogin']);
                }
                else{
                    $_SESSION['successfulLogin']=false;
                }
            }
            else {
                $_SESSION['successfulLogin']=false;
            }
        }
        mysqli_close($conn);
            ?>
        <ul class="navbar">
            <li><a href="index.php" class="active">Home</a></li>
            <li><a style="float:right" href="tetris.php">Play Tetris</a></li>
            <li><a style="float:right" href="leaderboard.php">Leaderboard</a></li>
            <li><a style="float:right; <?php if (isset($_SESSION['loggedIn'])) {echo 'display: inline;';} else {echo 'display: none;';}?>" href="logout.php">Logout</a></li>
        </ul>
        <hr>
        <div></div>
        <div class="main">
            <div class="grey-container">
                <div id="logged-out" <?php if (isset($_SESSION['loggedIn'])) {echo "style='display: none';";} else {echo "stye='display: inline';";}?>> 
                    <form action="#" method="post">
                    <h1> Login here!</h1>
                        <p>Enter your username and password</p>
                        <p style="color: red; <?php if (isset($_SESSION['successfulLogin'])) {echo 'display: block;';} else {echo 'display: none;';}?>">ERROR: Invalid username or password </p> 
                        <hr>
                        <p>
                            <label for="UserNameLogin">Username:</label>
                            <br>
                            <input type="text" name="UserNameLogin" id="UserNameLogin" placeholder="Enter your username" required>
                        </p>
                        <p>
                            <label for="PasswordLogin">Password:</label>
                            <br>
                            <input type="password" name="PasswordLogin" id="PasswordLogin" placeholder="Enter your password" required>
                        </p>
                        <button type="submit" class="registerbtn">Login</button>
                    </form>
                    <div class="login">
                        <p class="loginP">Don't have a user account? <a href="register.php">Register now</a></p>
                    </div>
                </div>
                <div id="logged-in" <?php if (isset($_SESSION['loggedIn'])) {echo "style='display: inline';";} else {echo "style='display: none';";}?>> 
                    <form>
                        <h1>Welcome to Tetris</h1>
                        <button id="indexPlay" type="button" onclick="location.href='tetris.php'">Click here to play</button>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>
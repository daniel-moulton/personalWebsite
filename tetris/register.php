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
        session_start();
        unset($_SESSION['successfulLogin']);
    ?>
    <ul class="navbar">
        <li><a href="index.php">Home</a></li>
        <li><a style="float:right" href="tetris.php">Play Tetris</a></li>
        <li><a style="float:right" href="leaderboard.php">Leaderboard</a></li>
    </ul>
    <hr>
    <div class="main">
        <div class="grey-container">
            <form action="index.php" method="post">
                <h1>Register here!</h1>
                <p>Enter a username and password to register</p>
                <p style="color: red; <?php if (isset($_SESSION['usernameTaken'])) {echo 'display: block;';} else {echo 'display: none;';}?>">ERROR: Username is taken </p> 
                <hr>
                <p>
                    <label for="username">Username:</label>
                    <br>
                    <input type="text" name="UserName" id="username" placeholder="Enter your username" required>
                </p>

                <p>
                    <label for="fname">First Name:</label>
                    <br>
                    <input type="text" name="FirstName" id="fname" placeholder="Enter your first name" required>
                </p>

                <p>
                    <label for="lname">Last Name:</label>
                    <br>
                    <input type="text" name="LastName" id="lname" placeholder="Enter your last name" required>
                </p>

                <p>
                    <label for="pword">Password:</label>
                    <br>
                    <input type="password" name="password" id="pword" placeholder="Enter your password" required>
                </p>

                <p>
                    <label for="confirm-pword">Confirm Password:</label>
                    <br>
                    <input type="password" name="confirm-password" id="confirm-pword" placeholder="Re-enter your password"
                        required>
                </p>
                <hr>

                <p>
                    Would you like to display your scores on the leaderboard?<br>
                    <input type="radio" name="displayScores" id="yes" value="yes" required>
                    <label for="yes">Yes</label><br>
                    <input type="radio" name="displayScores" id="no" value="no">
                    <label for="no">No</label><br>
                </p>

                <button type="submit" class="registerbtn"='index.php'">Create account</button>

                <div class="login">
                    <p class="loginP">Already have an account? <a href="index.php">Login here</a></p>
                </div>
        </div>
    </div>
</body>

</html>
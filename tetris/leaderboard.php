<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leaderboard</title>
</head>
<body>
    <?php 
        session_start(); 
        unset($_SESSION['successfulLogin']);
        ?>
    <ul class="navbar">
        <li><a href="index.php" >Home</a></li>
        <li><a style="float:right" href="tetris.php" >Play Tetris</a></li>
        <li><a style="float:right" href="leaderboard.php" class="active">Leaderboard</a></li>
        <li><a style="float:right; <?php if (isset($_SESSION['loggedIn'])) {echo 'display: inline;';} else {echo 'display: none;';}?>" href="logout.php">Logout</a></li>
    </ul> 
    <div class="main">
        <div class="grey-container">
            <?php
                require "config.php";
                if(isset($_POST['gameScore'])){
                    if($_SESSION['displayScores']==1){
                        $username=$_SESSION['userName'];
                        $score=$_POST['gameScore'];
                        $_SESSION['gameScore']=$score;
                        $sql="INSERT INTO Scores (Username, Score) VALUES ('$username', '$score');";
                        if (mysqli_query($conn, $sql)){
                            echo "Success";
                        }
                        else{
                            echo "ERROR: " . mysqli_error($conn);
                        }
                    }
                }
                $sql = "SELECT * FROM Scores ORDER BY Score DESC";
                $returned = mysqli_query($conn, $sql);

                echo "<table id='results-table'>
                <tr>
                <th>Username</th>
                <th>Score</th>
                </tr>";

                if (mysqli_num_rows($returned) > 0) {
                    while ($row = mysqli_fetch_array($returned)) {
                        echo "<tr>";
                        echo "<td>" . $row['Username'] . "</td>";
                        echo "<td>" . $row['Score'] . "</td>";
                        echo "</tr>";
                    }
                }
                echo "</table>";
                mysqli_close($conn);
            ?>
        </div>
    </div>
    
</body>
</html>
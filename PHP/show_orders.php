<?php
    include 'db_connection.php';
    $conn = OpenCon();


    $sql = " SELECT * FROM order_table ORDER BY id DESC ";
    $result = mysqli_query($conn, $sql);

    if (mysqli_query($conn, $sql)) {
        
        echo "got it";

    } else {
        echo "ERROR: Hush! Sorry $sql. "
        . mysqli_error($conn);
    }

    
    CloseCon($conn);
?>


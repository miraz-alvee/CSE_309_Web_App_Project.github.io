<?php
  require 'db_connection.php';

  $conn = OpenCon();
  $id = $_GET['id'];
  $query = "DELETE FROM order_table WHERE id = '$id';";
  $result = mysqli_query($conn, $query);
  if ($result) {
    CloseCon($conn);
    header("location: admin_homepage.php");
    exit();
  } else {
    echo "Error deleting record";
  }
?>

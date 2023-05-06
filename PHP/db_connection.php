<?php
 
    $conn = "";
    
    try {
        $servername = "localhost:3306";
        $dbname = "Unifoods_db";
        $username = "root";
        $password = "";
    
        $conn = new PDO(
            "mysql:host=$servername; dbname=Unifoods_db",
            $username, $password
        );
        
    $conn->setAttribute(PDO::ATTR_ERRMODE,
                        PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }

    function OpenCon()
    {
        $dbhost = "localhost";
        $dbuser = "root";
        $dbpass = "";
        $db = "Unifoods_db";
        $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
        
        return $conn;
    }
        
    function CloseCon($conn)
    {
        $conn -> close();
    }

 
?>
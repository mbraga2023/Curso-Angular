<?php

//variaveis
$host = 'localhost';
$username = 'apiuser';
$password = 'api@admin';
$dbname = 'api';

// Create the connection
$conexao = mysqli_connect($host, $username, $password, $dbname);

// Check if the connection was successful
if (!$conexao) {
    die("Connection failed: " . mysqli_connect_error());
}

//padronizar os caracterers
mysqli_set_charset($conexao, "utf8");

// Now, you have a successful database connection.
// You can perform database operations using the $conn variable.

// Close the database connection when you are done
// mysqli_close($conn);
?>




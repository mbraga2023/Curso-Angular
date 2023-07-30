<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include("conexao.php");

$sql = "SELECT * FROM cursos";

// Executar comando
$executar = mysqli_query($conexao, $sql);


if (!$executar) {
    die("Query failed: " . mysqli_error($conexao));
}

// Repeticao = Vetor
$cursos = [];

// Indice
$indice = 0;

// Repeticao
while ($linha = mysqli_fetch_assoc($executar)) {
    $cursos[$indice]['idCurso'] = $linha['idCurso'];
    $cursos[$indice]['nomeCurso'] = $linha['nomeCurso'];
    $cursos[$indice]['valorCurso'] = $linha['valorCurso'];

    $indice++;
}

// Remember to close the connection when you're done working with the database
mysqli_close($conexao);

// Encapsulate in JSON and send the response to the client
header('Content-Type: application/json');
echo json_encode(['cursos' => $cursos]);
?>

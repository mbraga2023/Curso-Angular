<?php
include("conexao.php");

//obter dados
$obterDados = file_get_contents("php://input");

//extrair dados Json
$extrair = json_decode($obterDados);

//separar os dados do Json
$nomeCurso = $extrair->cursos->nomeCurso;
$valorCurso = $extrair->cursos->valorCurso;

// SQL using prepared statement
$sql = "INSERT INTO cursos (nomeCurso, valorCurso) VALUES (?, ?)";

// Create a prepared statement
$stmt = mysqli_prepare($conexao, $sql);

// Bind the parameters
mysqli_stmt_bind_param($stmt, "si", $nomeCurso, $valorCurso);

// Execute the prepared statement
mysqli_stmt_execute($stmt);

// Check if the insert was successful or handle errors accordingly

//exportar os dados cadastrados
$curso = [
    'nomeCurso' => $nomeCurso,
    'valorCurso' => $valorCurso
];

// Correct json_encode function call
echo json_encode(['curso' => $curso]);
?>

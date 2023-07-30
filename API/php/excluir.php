<?php
include("conexao.php");

//obter dados
$obterDados = file_get_contents("php://input");

//extrair dados Json
$extrair = json_decode($obterDados);

//separar os dados do Json
$idCurso = $extrair->cursos->idCurso;

// SQL using prepared statement
$sql = "DELETE FROM cursos WHERE idCursos=$idCurso";

mysqli_prepare($conexao, $sql);

?>

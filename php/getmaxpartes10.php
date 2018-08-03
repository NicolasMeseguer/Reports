<?php
$server = "mysql:host=URLForYourDB;dbname=DBName";
$user = "UserName";
$pass = "Password";
$con = new PDO($server,$user,$pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
$result = array();

$sql = "SELECT alumnos.nombre nombre, grupos.nombre grupo, COUNT(alumnos.nombre) as partes FROM partefaltamedida INNER JOIN partes ON partefaltamedida.parte=partes.id INNER JOIN alumnos ON partes.alumno=alumnos.numexped INNER JOIN grupos ON alumnos.grupo=grupos.id GROUP BY (alumnos.nombre) ORDER BY partes DESC";
$consulta = $con->prepare($sql);
$consulta->execute();

$result = $consulta->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);

?>
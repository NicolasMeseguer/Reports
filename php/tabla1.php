<?php 
$server = "mysql:host=URLForYourDB;dbname=DBName";
$user = "UserName";
$pass = "Password";
$con = new PDO($server,$user,$pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
$result = array();

$sql = "SELECT partes.fecha fecha, alumnos.nombre nombre, grupos.nombre grupo ,profesores.nombre profesor, imgs.nombreimg img FROM partefaltamedida INNER JOIN partes ON partefaltamedida.parte=partes.id INNER JOIN alumnos ON partes.alumno=alumnos.numexped INNER JOIN grupos ON alumnos.grupo=grupos.id INNER JOIN profesores ON partes.profesor=profesores.id INNER JOIN imgs ON alumnos.numexped=imgs.aluid ORDER BY fecha DESC";
$consulta = $con->prepare($sql);
$consulta->execute();

$result = $consulta->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);
?>


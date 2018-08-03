<?php
$server = "mysql:host=URLForYourDB;dbname=DBName";
$user = "UserName";
$pass = "Password";
$con = new PDO($server,$user,$pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
$result = array();

$sql = "SELECT profesores.nombre nombre, COUNT(profesores.id) as partes FROM partefaltamedida INNER JOIN partes ON partefaltamedida.parte=partes.id INNER JOIN profesores ON partes.profesor=profesores.id GROUP BY (profesores.id) ORDER BY partes DESC";
$consulta = $con->prepare($sql);
$consulta->execute();

$result = $consulta->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);

?>
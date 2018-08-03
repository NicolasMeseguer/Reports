<?php 
$server = "mysql:host=URLForYourDB;dbname=DBName";
$user = "UserName";
$pass = "Password";
$con = new PDO($server,$user,$pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
$result = array();

$sql = "SELECT id,descripcion FROM medidas";
$consulta = $con->prepare($sql);
$consulta->execute();

$result = $consulta->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);
?>


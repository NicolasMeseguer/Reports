<?php
if(isset($_POST['fc']) && isset($_POST['fs'])){ 
$server = "mysql:host=URLForYourDB;dbname=DBName";
$user = "UserName";
$pass = "Password";
$con = new PDO($server,$user,$pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
$result = array();

$fechacom = $_POST['fc'];
$fechafin = $_POST['fs'];

$sql = "SELECT partes.fecha fecha, alumnos.nombre nombre, grupos.nombre grupo ,profesores.nombre profesor FROM partefaltamedida INNER JOIN partes ON partefaltamedida.parte=partes.id INNER JOIN alumnos ON partes.alumno=alumnos.numexped INNER JOIN grupos ON alumnos.grupo=grupos.id INNER JOIN profesores ON partes.profesor=profesores.id WHERE partes.fecha > '$fechacom' AND partes.fecha < '$fechafin' ORDER BY fecha DESC";
$consulta = $con->prepare($sql);
$consulta->execute();

$result = $consulta->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);
}
else
	echo 'Error, no has pasado los parmtros correctos !';
?>
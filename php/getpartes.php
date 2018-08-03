<?php
if(isset($_GET['fecha'])){ 
$server = "mysql:host=URLForYourDB;dbname=DBName";
$user = "UserName";
$pass = "Password";
$con = new PDO($server,$user,$pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
$result = array();

$fecha = $_GET['fecha'];

$sql = "SELECT *, COUNT(alumno) AS Acumulaciones FROM partes WHERE fecha > '$fecha' GROUP BY alumno"; //Esta consulta no deberia de devolver nada
$consulta = $con->prepare($sql);
$consulta->execute();

$result = $consulta->fetchAll();

if (!empty($result)) {
	foreach($result as $r) {
		$ids[] = $r[2];
		$acs[] = $r[4];
	}

	foreach($ids as $id) {
		$sql = 'SELECT nombre FROM alumnos WHERE numexped = ?';
		$consulta = $con->prepare($sql);
		$consulta->bindParam(1, $id);
		$consulta->execute();
		
		$nombre = $consulta->fetchAll();
		$nombs[] = $nombre[0][0];
	}
	$results[] = $nombs;
	$results[] = $acs;
}
else 
	$results = array();

echo json_encode($results);
}
else
	echo 'Error, no has pasado los parmtros correctos !';
?>


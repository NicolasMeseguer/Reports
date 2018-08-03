<?php 
$DEPURACION = false;
if(isset($_GET['patron'])) {
		$server = "mysql:host=URLForYourDB;dbname=DBName";
		$user = "UserName";
		$pass = "Password";
		$con = new PDO($server,$user,$pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
		$result = array();

		$sql = "SELECT alumnos.nombre,alumnos.numexped,grupos.nombre grupo, imgs.nombreimg img FROM alumnos INNER JOIN grupos ON alumnos.grupo=grupos.id INNER JOIN imgs ON alumnos.numexped=imgs.aluid WHERE alumnos.numexped LIKE '".$_GET['patron']."%'";
		$consulta = $con->prepare($sql);
		$consulta->execute();
		
		$result = $consulta->fetchAll(PDO::FETCH_ASSOC);

		echo json_encode($result);
}
else {
	echo "No has pasado los parámetros correctos. Debes pasar 'patron'";
}
?>


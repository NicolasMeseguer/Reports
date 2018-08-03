<?php 
$DEPURACION = false;
if(isset($_GET['patron'])) {
		$server = "mysql:host=URLForYourDB;dbname=DBName";
		$user = "UserName";
		$pass = "Password";
		$con = new PDO($server,$user,$pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
		$result = array();

		$consulta = "SELECT id,nombre FROM profesores WHERE nombre LIKE '%".$_GET['patron']."%'";
		$sen = $con->prepare($consulta);
		$sen->execute();
		
		$result = $sen->fetchAll(PDO::FETCH_ASSOC);

		echo json_encode($result);
}
else {
	echo "No has pasado los parámetros correctos. Debes pasar 'patron'";
}
?>


<?php
if(isset($_GET['profesor']) && isset($_GET['alumno']) && isset($_GET['fecha'])) {
		$server = "mysql:host=URLForYourDB;dbname=DBName";
		$user = "UserName";
		$pass = "Password";
		$con = new PDO($server,$user,$pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
		$result = array();

		$sql = "INSERT INTO partes VALUES (NULL, ?, ?, ?);";
		$consulta = $con->prepare($sql);
		$consulta->bindParam(1, $_GET['profesor']);
		$consulta->bindParam(2, $_GET['alumno']);
		$consulta->bindParam(3, $_GET['fecha']);
		$consulta->execute();
		
		$sql = "SELECT * FROM partes ORDER BY id DESC";
		$consulta = $con->prepare($sql);
		$consulta->execute();
		
		$r=$consulta->fetchAll();
		
		$result = $r[0][0];


		echo json_encode($result);
}
else {
	echo "No has pasado los parámetros correctos.";
}
?>


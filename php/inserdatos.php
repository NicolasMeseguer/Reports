<?php
if(isset($_GET['parte']) && isset($_GET['falta']) && isset($_GET['medida'])) {
		$server = "mysql:host=URLForYourDB;dbname=DBName";
		$user = "UserName";
		$pass = "Password";
		$con = new PDO($server,$user,$pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
		$result = array();

		$sql = "INSERT INTO partefaltamedida VALUES (?, ?, ?);";
		$consulta = $con->prepare($sql);
		$consulta->bindParam(1, $_GET['parte']);
		$consulta->bindParam(2, $_GET['falta']);
		$consulta->bindParam(3, $_GET['medida']);
		$consulta->execute();

}
else {
	echo "No has pasado los parámetros correctos.";
}
?>


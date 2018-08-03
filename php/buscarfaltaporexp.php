<?php
if(isset($_POST['id'])) {
	$DEPURACION = false;
	if ($DEPURACION) echo "<html><head></head><body>";
	
	$server = "mysql:host=URLForYourDB;dbname=DBName";
	$user = "UserName";
	$pass = "Password";
	$con = new PDO($server,$user,$pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
	$result = array();
	
	// creamos el documento XML	
	$xml = new DOMDocument('1.0', 'UTF-8');
	$root = $xml->appendChild($xml->createElement("listado"));
	if (!$DEPURACION) header('Content-type: text/xml');
	
	$id = $_POST['id'];
	
	$sql = 'SELECT partes.fecha, profesores.nombre FROM partefaltamedida INNER JOIN partes ON partefaltamedida.parte=partes.id INNER JOIN profesores ON partes.profesor=profesores.id WHERE alumno = ? ORDER BY partes.fecha DESC';
	$consulta = $con->prepare($sql);
	$consulta->bindParam(1, $id);
	$consulta->execute();
	
	while($row = $consulta->fetch(PDO::FETCH_NAMED)){
		$node = $xml->createElement("parte");
		$parte = $root->appendChild($node);
		foreach ($row as $columna => $valor) {
			$node = $xml->createElement($columna,$valor);
			$newnode = $parte->appendChild($node);
		}
	}
	if ($DEPURACION) echo "<h1>Resultados de la consulta</h1>";
	if ($DEPURACION) echo $consulta;
	if ($DEPURACION) echo "<h1>XML generado</h1>";
	echo $xml->saveXML();
	
	if ($DEPURACION) echo "</body></html>";
}
else
	echo 'No has pasado los parámetros correctos';
?>
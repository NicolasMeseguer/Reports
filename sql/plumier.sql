-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-02-2018 a las 18:32:50
-- Versión del servidor: 10.1.26-MariaDB
-- Versión de PHP: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `plumier`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `nombre` varchar(255) NOT NULL,
  `numexped` int(11) NOT NULL,
  `grupo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`nombre`, `numexped`, `grupo`) VALUES
('IVAN LIGERO BLAZQUEZ', 3486, 9),
('JULIAN CLAVIJO HERNANDO', 3564, 8),
('VICTOR MANUEL BONET MERIDA', 4337, 5),
('JUAN CARLOS DAZA MOLTO', 4464, 9),
('JOAQUIN VACA JIMENO', 4714, 5),
('HECTOR TENORIO RIVAS', 4717, 5),
('XAVIER LOPEZ AMIGO', 4723, 5),
('JAIME MELERO MENDIETA', 4735, 32),
('DOMINGO PUERTAS ASENSIO', 4737, 32),
('OSCAR BOHORQUEZ MERA', 4792, 2),
('EDUARDO DURO VERDEJO', 4838, 9),
('ANA MIQUEL SOLE', 5024, 6),
('ANA ISABEL SILVA FALCON', 5030, 5),
('ANA MARIA PALLAS MANCHADO', 5032, 6),
('SOFIA DE LAS HERAS CARDONA', 5036, 6),
('SUSANA NEGRIN OCHOA', 5040, 5),
('MONTSERRAT ORTIN DURO', 5044, 6),
('NICOLAS MESEGUER IBORRA', 5046, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `faltas`
--

CREATE TABLE `faltas` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `faltas`
--

INSERT INTO `faltas` (`id`, `descripcion`) VALUES
(1, '29a - Las faltas injustificadas de puntualidad o de asistencia a clase.'),
(2, '29b - Las conductas que puedan impedir o dificultar a sus compañeros el ejercicio del derecho o el cumplimiento del deber del estudio, el comportamiento disruptivo y los actos que perturben el desarrollo normal de las actividades del  centro.'),
(3, '29c - La asistencia reiterada a clase sin el material necesario.'),
(4, '29d - No esforzarse por realizar las actividades de aprendizaje indicadas por el profesor.'),
(5, '29e - No trasladar a sus padres o representantes legales la información del centro dirigida a ellos.'),
(6, '29f - El uso, sin autorización, de teléfonos móviles y otros dispositivos electrónicos en las aulas u otras dependencias del centro.'),
(7, '29g - Los actos de indisciplina, desobediencia, incorrección o desconsideración hacia el profesor o demás personal del centro, cuando por su entidad no sean considerados graves.'),
(8, '29h - La desconsideración, insultos o agresiones entre compañeros, cuando por su entidad no sean consideradas graves.'),
(9, '29i - Los daños leves causados en las instalaciones o el material del centro, así como el deterioro de las condiciones de limpieza e higiene del mismo.'),
(10, '29j - Los daños leves causados en los bienes o pertenencias de los miembros de la comunidad educativa, así como la apropiación indebida de material escolar de escaso valor.'),
(11, '29k - La incitación o estímulo a la comisión de una falta leve contra las normas de convivencia del centro.'),
(12, '29l - El incumplimiento de las normas establecidas por el centro en cuanto a indumentaria, higiene, alimentación, horarios y uso de instalaciones y recursos, así como aquellas otras establecidas en sus normas de convivencia y conducta.'),
(13, '32a - La comisión de una falta leve tras haber sido corregido el alumno durante el curso por la comisión de tres faltas leves.'),
(14, '32b - El incumplimiento de la medida correctora adoptada ante la comisión de faltas leves contra las normas de convivencia, salvo que el incumplimiento se deba a causas ajenas al propio alumno, o, en su caso, la negativa a cumplir los acuerdos alcanzados en el proceso de mediación escolar o en los contratos de convivencia.'),
(15, '32c - La grabación o difusión, sin autorización, a través de teléfonos móviles o de cualquier otro medio, soporte o dispositivo electrónico o telemático, de imágenes o comentarios que guarden relación con la vida escolar.'),
(16, '32d - Los actos graves de indisciplina, incorrección o desconsideración, injuria u ofensa contra el personal del centro o encargado de las actividades extraescolares o servicios complementarios.'),
(17, '32e - Las amenazas, insultos o actos violentos entre compañeros que no causen un daño grave.'),
(18, '32f - Los actos de falta de respeto, amenazas, insultos, coacciones o agresión cometidos contra el profesorado, cuando por su entidad y circunstancias no sean considerados como muy graves, así como aquellos que pudieran causar grave perjuicio a la integridad, dignidad o a la salud personal de cualquier miembro de la comunidad educativa.'),
(19, '32g - Copiar en los exámenes, trabajos o pruebas de evaluación, consultando o plagiando los trabajos o ejercicios de otros alumnos, u obteniendo, en el caso de los exámenes y pruebas de evaluación, información de libros de texto, apuntes o dispositivos electrónicos o telemáticos.'),
(20, '32h - La suplantación de personalidad en actos de la vida académica y la falsificación o sustracción de pruebas de evaluación, documentos académicos, boletines de calificaciones o cualquier otro documento de notificación a los padres o representantes legales, en el caso de alumnos menores de edad.'),
(21, '32i - El acceso indebido o sin autorización a ficheros, documentación y dependencias del centro.'),
(22, '32j - Los daños graves causados en los documentos, locales o materiales del centro, transporte escolar, instalaciones donde se desarrollen actividades complementarias o extraescolares, o en los bienes de otros miembros de la comunidad educativa, así como la sustracción de los mismos.'),
(23, '32k - Las actuaciones perjudiciales para la salud y la integridad personal de los miembros de la comunidad educativa, así como la introducción en el centro de objetos peligrosos.'),
(24, '32l - El consumo dentro del recinto del centro, en los alrededores o en el desarrollo de actividades complementarias o extraescolares de alcohol, drogas y de cualquier tipo de sustancias perjudiciales para la salud.'),
(25, '32m - Las conductas tipificadas como leves contra las normas de convivencia del centro, recogidas en el artículo 29, si concurren circunstancias de colectividad o publicidad intencionada por cualquier medio.'),
(26, '32n - La incitación o el estímulo a la comisión de una falta grave contra las normas de convivencia.'),
(27, '34a - La comisión de una falta grave tras haber sido corregido el alumno durante el curso por la comisión de dos faltas graves.'),
(28, '34b - El incumplimiento de la medida correctora adoptada ante la comisión de faltas graves contra las normas de convivencia, salvo que el incumplimiento se deba a causas ajenas al propio alumno.'),
(29, '34c - Las amenazas, insultos y agresiones o actos violentos entre compañeros que causen un daño grave, así como los actos que atenten gravemente contra la integridad, intimidad o dignidad de los compañeros o demás miembros de la comunidad educativa.'),
(30, '34d - Los actos graves de agresión, insultos, amenazas o actitudes desafiantes cometidos hacia los profesores y demás personal del centro, así como el acoso físico o moral, realizado por cualquier vía o medio, contra los miembros de la comunidad educativa.'),
(31, '34e - Las vejaciones, humillaciones, discriminaciones u ofensas muy graves contra cualquier miembro de la comunidad educativa, que tengan como origen o consecuencia una discriminación o acoso basado en el sexo, orientación o identidad sexual, o un origen racial, étnico, religioso, de creencias o de discapacidad, o que se realicen contra el alumnado más vulnerable por sus características personales, sociales o educativas.'),
(32, '34f - La grabación, publicidad o difusión, a través de teléfono móvil o de cualquier otro medio, soporte o dispositivo electrónico o telemático, de agresiones, actos que tengan un componente sexual, humillaciones o actos violentos, que guarden relación con la vida escolar o que atenten contra la intimidad, el honor, la integridad o dignidad de algún miembro de la comunidad educativa.'),
(33, '34g - Los daños muy graves causados en los documentos, locales o materiales del centro, transporte escolar, instalaciones donde se desarrollen actividades complementarias o extraescolares, o en los bienes de otros miembros de la comunidad educativa.'),
(34, '34h - La venta en el centro de sustancias perjudiciales para la salud, o la incitación de su consumo a otros alumnos, así como la incitación al uso de objetos peligrosos para la integridad personal de los miembros de la comunidad educativa.'),
(35, '34i - La posesión o venta de sustancias estupefacientes.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos`
--

CREATE TABLE `grupos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `grupos`
--

INSERT INTO `grupos` (`id`, `nombre`) VALUES
(1, 'BC1A'),
(2, 'BC2A'),
(3, 'BH1B'),
(4, 'BH1C'),
(5, 'BH2B'),
(6, 'BH2C'),
(7, 'BT1D'),
(8, 'DAW1'),
(9, 'DAW2'),
(10, 'EPMA1'),
(11, 'E1AB'),
(12, 'E1BB'),
(13, 'E1C'),
(14, 'E1CB'),
(15, 'E1D'),
(16, 'E1E'),
(17, 'E2AB'),
(18, 'E2BB'),
(19, 'E2C'),
(20, 'E2CB'),
(21, 'E2D'),
(22, 'E2E'),
(23, 'E3AB'),
(24, 'E3BB'),
(25, 'E3C'),
(26, 'E3D'),
(27, 'E4A'),
(28, 'E4AB'),
(29, 'E4B'),
(30, 'FB1A'),
(31, 'FB2A'),
(32, 'SMR1'),
(33, 'SMR2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imgs`
--

CREATE TABLE `imgs` (
  `aluid` int(11) NOT NULL,
  `nombreimg` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `imgs`
--

INSERT INTO `imgs` (`aluid`, `nombreimg`) VALUES
(3486, '3486.jpg'),
(3564, '3564.jpg'),
(4337, '4337.jpg'),
(4464, '4464.jpg'),
(4714, '4714.jpg'),
(4717, '4717.jpg'),
(4723, '4723.jpg'),
(4735, '4735.jpg'),
(4737, '4737.jpg'),
(4792, '4792.jpg'),
(4838, '4838.jpg'),
(5024, '5024.jpg'),
(5030, '5030.jpg'),
(5032, '5032.jpg'),
(5036, '5036.jpg'),
(5040, '5040.jpg'),
(5044, '5044.jpg'),
(5046, '5046.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medidas`
--

CREATE TABLE `medidas` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `medidas`
--

INSERT INTO `medidas` (`id`, `descripcion`) VALUES
(1, '30a - Situar temporalmente al alumno en un lugar determinado dentro del aula o enviarlo al espacio, que, en su caso, pueda tener habilitado el centro en su plan de convivencia.'),
(2, '30b - Realización de actividades de aprendizaje e interiorización de pautas de conductas correctas.'),
(3, '30c - Amonestación por escrito, con posterior comunicación a los representantes legales, en caso de los menores de edad.'),
(4, '30d - Comparecencia inmediata ante la jefatura de estudios o el director del centro.'),
(5, '30e - Retirada del teléfono móvil o del dispositivo electrónico que haya sido utilizado por el alumno, de forma no autorizada, que será custodiado en las condiciones establecidas en las normas de funcionamiento del centro hasta que sus padres o representantes legales lo recojan en el mismo.'),
(6, '30f - Privación del tiempo de recreo por un periodo máximo de cinco días lectivos. Durante ese tiempo el alumno permanecerá debidamente atendido.'),
(7, '30g - Realización en casa de tareas educativas o actividades de carácter académico para el alumno.'),
(8, '30h - Realización, dentro de la jornada escolar y durante un máximo de cinco días lectivos, de tareas específicas dirigidas a mejorar las condiciones de limpieza e higiene del centro como fórmula de reparación del daño causado a las dependencias o material del centro, o de cualquier miembro de la comunidad educativa.'),
(9, '30i - Realización de un curso o taller de habilidades sociales programado por el centro para aquellos alumnos que requieran esta medida reeducativa.'),
(10, '30j - Suspensión del derecho a participar en alguna actividad extraescolar o complementaria que tenga programada el centro, previo informe del profesor encargado de su desarrollo y una vez oído el alumno y sus padres o representantes legales, si es menor de edad.'),
(11, '30k - Cambio de grupo por un periodo máximo de cinco días lectivos.'),
(12, '30l - Realización de tareas educativas en el aula de convivencia, o en el lugar determinado por el centro en su plan de convivencia, durante un máximo de cinco días lectivos.'),
(13, '30m - Realización, fuera del horario lectivo y durante un máximo de cinco días, de una tarea o un servicio a la comunidad educativa como fórmula de reparación del daño causado. Esta medida deberá comunicarse previamente a los padres o representantes legales en el caso del alumnado menor de edad.'),
(14, '33a - Cambio de grupo por un periodo máximo de quince días lectivos.'),
(15, '33b - Realización de tareas educativas en el aula de convivencia del centro, o en su defecto en el lugar que se determine, durante un máximo de quince días lectivos.'),
(16, '33c - Realización, fuera del horario lectivo y durante un máximo de quince días, de una tarea o un servicio a la comunidad educativa como fórmula de reparación del daño causado. Esta medida deberá comunicarse previamente a los padres o representantes legales en el caso del alumnado menor de edad.'),
(17, '33d - Suspensión del derecho a participar en determinadas actividades extraescolares o complementarias que tenga programada el centro en los tres meses siguientes a la comisión de la falta grave contra las normas de convivencia.'),
(18, '33e - Suspensión del derecho a la utilización del transporte escolar del centro durante un periodo máximo de quince días lectivos, cuando la conducta contraria haya sido cometida en el transporte escolar, siempre que en función de la edad o de la existencia de transporte público alternativo el alumno no se viera imposibilitado de acudir al centro.'),
(19, '33f - Suspensión del derecho de asistencia a determinadas clases por un periodo máximo de quince días lectivos. Durante la impartición de estas clases el alumno deberá permanecer en el centro efectuando los trabajos académicos que se le encomienden, por parte del profesorado responsable del área, materia o módulo afectado, para evitar la interrupción en el proceso formativo. El jefe de estudios organizará la atención al alumno al que le haya sido impuesta esta medida correctora, según lo dispuesto en las normas de funcionamiento.'),
(20, '33g - Suspensión del derecho de asistencia al centro durante un periodo comprendido entre uno y quince días lectivos. Durante el tiempo que dure la suspensión, el alumno deberá realizar los trabajos académicos que determine el equipo docente de su grupo de referencia, para evitar la interrupción en el proceso formativo. Las normas de convivencia y conducta del centro determinarán los mecanismos que posibiliten un adecuado seguimiento de dicho proceso, especificando el horario de visitas al centro del alumno y garantizando siempre el derecho del alumno a realizar las pruebas de evaluación o exámenes que se lleven a cabo durante los días que dure la suspensión.'),
(21, '35a - Suspensión del derecho de asistencia al centro durante un periodo comprendido entre dieciséis y treinta días lectivos. Durante el tiempo que dure la suspensión, el alumno deberá realizar los trabajos académicos que determine el profesorado que le imparte docencia, para evitar la interrupción en el proceso formativo. Las normas de convivencia y conducta del centro determinarán los mecanismos que posibiliten un adecuado seguimiento de dicho proceso, especificando el horario de visitas al centro del alumno y garantizando siempre el derecho del alumno a realizar las pruebas de evaluación o exámenes que se lleven a cabo durante los días que dure la suspensión.'),
(22, '35b - Suspensión del derecho a la utilización del transporte escolar del centro durante todo el curso académico, cuando la conducta contraria haya sido cometida en el transporte escolar, siempre que en función de la edad o de la existencia de transporte público alternativo el alumno no se viera imposibilitado de acudir al centro.'),
(23, '35c - Suspensión del derecho a participar en actividades extraescolares o complementarias durante todo el curso académico.'),
(24, '35d - Cambio de centro, cuando se trate de un alumno de enseñanza obligatoria.'),
(25, '35e - Expulsión del centro.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partefaltamedida`
--

CREATE TABLE `partefaltamedida` (
  `parte` int(11) NOT NULL,
  `falta` int(11) NOT NULL,
  `medida` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partes`
--

CREATE TABLE `partes` (
  `id` int(11) NOT NULL,
  `profesor` int(11) NOT NULL,
  `alumno` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`id`, `nombre`) VALUES
(1, 'CARMEN BARRIO POZO'),
(2, 'MARIA OÑATE MACHADO'),
(3, 'PURIFICACION ARCOS MANZANARES'),
(4, 'MARTA GAVILAN GARAY'),
(5, 'SANTIAGO CAÑAS MEDINA'),
(6, 'FELIPE BERNABEU ESTEVE'),
(7, 'MARIO VERA UGARTE'),
(8, 'AURORA TORNERO ANGULO');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`numexped`),
  ADD KEY `grupo` (`grupo`);

--
-- Indices de la tabla `faltas`
--
ALTER TABLE `faltas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `imgs`
--
ALTER TABLE `imgs`
  ADD KEY `aluid` (`aluid`);

--
-- Indices de la tabla `medidas`
--
ALTER TABLE `medidas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `partefaltamedida`
--
ALTER TABLE `partefaltamedida`
  ADD KEY `parte` (`parte`,`falta`,`medida`),
  ADD KEY `falta` (`falta`),
  ADD KEY `medida` (`medida`);

--
-- Indices de la tabla `partes`
--
ALTER TABLE `partes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `profesor` (`profesor`,`alumno`),
  ADD KEY `alumno` (`alumno`),
  ADD KEY `profesor_2` (`profesor`);

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `faltas`
--
ALTER TABLE `faltas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `grupos`
--
ALTER TABLE `grupos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `medidas`
--
ALTER TABLE `medidas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `partes`
--
ALTER TABLE `partes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `profesores`
--
ALTER TABLE `profesores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD CONSTRAINT `alumnos_ibfk_1` FOREIGN KEY (`grupo`) REFERENCES `grupos` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `imgs`
--
ALTER TABLE `imgs`
  ADD CONSTRAINT `imgs_ibfk_1` FOREIGN KEY (`aluid`) REFERENCES `alumnos` (`numexped`);

--
-- Filtros para la tabla `partefaltamedida`
--
ALTER TABLE `partefaltamedida`
  ADD CONSTRAINT `partefaltamedida_ibfk_1` FOREIGN KEY (`parte`) REFERENCES `partes` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `partefaltamedida_ibfk_2` FOREIGN KEY (`falta`) REFERENCES `faltas` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `partefaltamedida_ibfk_3` FOREIGN KEY (`medida`) REFERENCES `medidas` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `partes`
--
ALTER TABLE `partes`
  ADD CONSTRAINT `partes_ibfk_1` FOREIGN KEY (`profesor`) REFERENCES `profesores` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `partes_ibfk_2` FOREIGN KEY (`alumno`) REFERENCES `alumnos` (`numexped`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

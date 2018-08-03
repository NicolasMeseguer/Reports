/*
      __    __     __________  ___    __    _______      ______     _        __
     /  /  /  /   /  ____    / \  \  / /   /  __   \    /_   __/   / \      /  /
    /  /__/  /   /  /    /  /   \  \/ /   /  /  /  /     /  /     /   \    /  /
   /        /   /  /____/  /     \   /   /  /  /  /     /  /     /  /  \  /  /
  /  __    /   /   ____   /      /  /   /  /  /  /     /  /     /  / \  \/  /
 /  /  /  /   /  /    /  /      /  /   /  /__/  /   __/  /_    /  /   \    /
/__/  /__/   /__/    /__/      /__/   /________/   /______/   /__/     \__/

#   Copyright © 2018 by Nicolás Meseguer Iborra

#   All rights reserved. No part of this code may be reproduced, distributed,
#   or transmitted in any form or by any means, including photocopying, recording,
#   or other electronic or mechanical methods, without the prior written permission
#   of the writter, except in the case of brief quotations embodied in critical
#   reviews and certain other noncommercial uses permitted by copyright law. For
#   permission requests, write to the owner's e-mail, nicolasmeseguer@icloud.com

*/

$(document).ready(function(){

	//Funcionalidad pestañas
	$('#page2content').hide();
	$('#page3content').hide();

	$('#page2').click(function() {
		$('#page1content').hide();
		$('#page3content').hide();
		$('#page2content').show();
		$('#page1').parent().removeClass('active');
		$('#page3').parent().removeClass('active');
		$('#page2').parent().addClass('active');
	});

	$('#page1').click(function() {
		$('#page2content').hide();
		$('#page3content').hide();
		$('#page1content').show();
		$('#page2').parent().removeClass('active');
		$('#page3').parent().removeClass('active');
		$('#page1').parent().addClass('active');
	});

	$('#page3').click(function() {
		$('#page2content').hide();
		$('#page1content').hide();
		$('#page3content').show();
		$('#page2').parent().removeClass('active');
		$('#page1').parent().removeClass('active');
		$('#page3').parent().addClass('active');
	});
	//Fin pestañas

	$("#divSugerProfesor").hide();
	$("#divSugerAlumno").hide();
	$("#divSugerAlumno2").hide();
	$("#divSugerProfesor2").hide();

	var now = new Date();

	var day = ("0" + now.getDate()).slice(-2);
	var month = ("0" + (now.getMonth() + 1)).slice(-2);

	var today = now.getFullYear()+"-"+(month)+"-"+(day) ;

	$('#fecha').val(today);

	//BUSCADOR GOOGLE
	var pal = ""; //Aqui almacenaremos siempre la variable que el tio escribe... //Si queremos que cada input guarde la variable por si me voy a otro campo, hacer mas variables
	//para guardar el valor de cada input
	//

	$('#profesor').addClass('actual');
	$('#numexp').addClass('actual');
	$('#alumno').addClass('actual');
	$('#numexp2').addClass('actual');
	$('#alumno2').addClass('actual');
	$('#profesor2').addClass('actual');

	$("#alumno").keyup(function(evento){ //INPUT ALUMNO

		if (evento.which == 38 && $('#divSugerAlumno').children().children().length >=1) {
			if (!$(".sugerMarcada").length && $('#alumno').hasClass('actual')) {
				$('#alumno').removeClass('actual');
				$("#divSugerAlumno>ul>li:last").addClass("sugerMarcada");
				$('#alumno').val($('#divSugerAlumno .sugerMarcada').find('#nombrealu').text());
				$('#numexp').val($('#divSugerAlumno .sugerMarcada').find('#expalu').html());
			} else if ( !$("#divSugerAlumno>ul>li:first").hasClass("sugerMarcada") ) {
				$(".sugerMarcada").removeClass("sugerMarcada").prev().addClass('sugerMarcada');
				$('#alumno').val($('#divSugerAlumno .sugerMarcada').find('#nombrealu').text());
				$('#numexp').val($('#divSugerAlumno .sugerMarcada').find('#expalu').html());
			} else {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#alumno').addClass('actual');
				$('#alumno').val(pal);
				$('#numexp').val('');
			}
		}
		else if (evento.which == 40 && $('#divSugerAlumno').children().children().length >=1) {
			if (!$(".sugerMarcada").length && $('#alumno').hasClass('actual')) {
				//resaltar primera sugerencia
				$('#alumno').removeClass('actual');
				$("#divSugerAlumno>ul>li:first").addClass("sugerMarcada");
				$('#alumno').val($('#divSugerAlumno .sugerMarcada').find('#nombrealu').text());
				$('#numexp').val($('#divSugerAlumno .sugerMarcada').find('#expalu').html());
			}
			else if ( !$("#divSugerAlumno>ul>li:last").hasClass("sugerMarcada") ) {
				$(".sugerMarcada").removeClass("sugerMarcada")
								  .next()
								  .addClass("sugerMarcada");
				$('#alumno').val($('#divSugerAlumno .sugerMarcada').find('#nombrealu').text());
				$('#numexp').val($('#divSugerAlumno .sugerMarcada').find('#expalu').html());
			}
			else {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#alumno').addClass('actual');
				$('#alumno').val(pal);
				$('#numexp').val('');
			}
		}
		else if(evento.which == 37) {
			$('.sugerMarcada').removeClass('sugerMarcada');
			$('#alumno').addClass('actual');
		}
		else if(evento.which == 39) {
			$('.sugerMarcada').removeClass('sugerMarcada');
			$('#alumno').addClass('actual');
		}
		else if (evento.which == 13) {
			if(!$('#alumno').hasClass('actual')) {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#divSugerAlumno').empty().hide();
				$('#alumno').addClass('actual');
			}
			else
				return false;
		}


		else {
			if ($('#alumno').val()==''){
				$("#divSugerAlumno").empty();
				$("#divSugerAlumno").hide();
			}
			else {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#alumno').addClass('actual');

				$("#divSugerAlumno").empty();
				$("#divSugerAlumno").show();
				var ptr = $(this).val();
				pal = ptr;
				ptr = ptr.toUpperCase();
				$.ajax({
					url: 'php/getalumnos.php',
					type: 'GET',
					data: {patron: ptr},
					dataType: 'json',
					success: function(json) {
						if(json.length==0)
							return false;

						$ulalumnos = $('<ul></ul>');
						$('#divSugerAlumno').append($ulalumnos);

						for(i=0; i<20; i++) { //Maximo 20 alumnos

							var $li = $('<li><span id="img"><img src="img/'+json[i].img+'" style="width: 50px; height:50px;" alt="Foto alumno '+json[i].nombre+'"></span><span id="expalu">'+json[i].numexped+'</span>-<span id="nombrealu">'+json[i].nombre+'</span>-'+json[i].grupo+'</li>');
							$li.click(function() {
								$('#alumno').val($(this).find('#nombrealu').html());
								$('#numexp').val($(this).find('#expalu').html())
								$("#divSugerAlumno").empty();
								$("#divSugerAlumno").hide();
							});
							$li.hover(function(){
								$(this).css('cursor','pointer');
								$(this).css('background-color','lightgrey');
							},function() {
								$(this).css('cursor','default');
								$(this).css('background-color','');
							});
							$ulalumnos.append($li);
						}

					},
					error: function() {

					}
				});
			}
		}
	});

	$("#numexp").keydown(function(evento){ //INPUT NEXP
		if(evento.which>=48 && evento.which<=57 || evento.which>=96 && evento.which<=105 || evento.which==8 || evento.which==46 || evento.which>=37 && evento.which<=40 ) {
			return true;
		}
		else
			return false;
	});

	$("#numexp").keyup(function(evento){

		if (evento.which == 38 && $('#divSugerAlumno').children().children().length >=1) {
			if (!$(".sugerMarcada").length && $('#numexp').hasClass('actual')) {
				$('#numexp').removeClass('actual');
				$("#divSugerAlumno>ul>li:last").addClass("sugerMarcada");
				$('#alumno').val($('#divSugerAlumno .sugerMarcada').find('#nombrealu').html());
				$('#numexp').val($('#divSugerAlumno .sugerMarcada').find('#expalu').html());
			} else if ( !$("#divSugerAlumno>ul>li:first").hasClass("sugerMarcada") ) {
				$(".sugerMarcada").removeClass("sugerMarcada").prev().addClass('sugerMarcada');
				$('#alumno').val($('#divSugerAlumno .sugerMarcada').find('#nombrealu').html());
				$('#numexp').val($('#divSugerAlumno .sugerMarcada').find('#expalu').html());
			} else {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#numexp').addClass('actual');
				$('#alumno').val('');
				$('#numexp').val(pal);
			}
		}
		else if (evento.which == 40 && $('#divSugerAlumno').children().children().length >=1) {
			if (!$(".sugerMarcada").length && $('#alumno').hasClass('actual')) {
				//resaltar primera sugerencia
				$('#numexp').removeClass('actual');
				$("#divSugerAlumno>ul>li:first").addClass("sugerMarcada");
				$('#alumno').val($('#divSugerAlumno .sugerMarcada').find('#nombrealu').html());
				$('#numexp').val($('#divSugerAlumno .sugerMarcada').find('#expalu').html());
			}
			else if ( !$("#divSugerAlumno>ul>li:last").hasClass("sugerMarcada") ) {
				$(".sugerMarcada").removeClass("sugerMarcada")
								  .next()
								  .addClass("sugerMarcada");
				$('#alumno').val($('#divSugerAlumno .sugerMarcada').find('#nombrealu').html());
				$('#numexp').val($('#divSugerAlumno .sugerMarcada').find('#expalu').html());
			}
			else {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#numexp').addClass('actual');
				$('#alumno').val('');
				$('#numexp').val(pal);
			}
		}
		else if(evento.which == 37) {
			$('.sugerMarcada').removeClass('sugerMarcada');
			$('#numexp').addClass('actual');
		}
		else if(evento.which == 39) {
			$('.sugerMarcada').removeClass('sugerMarcada');
			$('#numexp').addClass('actual');
		}
		else if (evento.which == 13) {
			if(!$('#numexp').hasClass('actual')) {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#divSugerAlumno').empty().hide();
				$('#numexp').addClass('actual');
			}
			else
				return false;
		}
		else {
			if ($('#numexp').val()==''){
				$("#divSugerAlumno").empty();
				$("#divSugerAlumno").hide();
			}
			else {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#numexp').addClass('actual');

				$("#divSugerAlumno").empty();
				$("#divSugerAlumno").show();

				var ptr = $(this).val();
				pal = ptr;
				$.ajax({
					url: 'php/getnumexp.php',
					type: 'GET',
					data: {patron: ptr},
					dataType: 'json',
					success: function(json) {
						if(json.length==0)
							return false;
						
						$ulalumnos = $('<ul></ul>');
						$('#divSugerAlumno').append($ulalumnos);
						for(i=0; i<20; i++) { //Maximo de 20 personas
							
							var $li = $('<li><span id="img"><img src="img/'+json[i].img+'" style="width: 50px; height:50px;" alt="Foto alumno '+json[i].nombre+'"></span><span id="expalu">'+json[i].numexped+'</span>-<span id="nombrealu">'+json[i].nombre+'</span>-'+json[i].grupo+'</li>');
							$li.addClass("seleccion");
							$li.click(function() {
								$('#alumno').val($(this).find('#nombrealu').html());
								$('#numexp').val($(this).find('#expalu').html())
								$("#divSugerAlumno").empty();
								$("#divSugerAlumno").hide();
							});
							$li.hover(function(){
								$(this).css('cursor','pointer');
								$(this).css('background-color','lightgrey');
							},function() {
								$(this).css('cursor','default');
								$(this).css('background-color','');
							});
							$ulalumnos.append($li);
						}
					},
					error: function() {

					}
				});
			}
		}
	});

	$("#profesor").keyup(function(evento){

		if (evento.which == 38 && $('#divSugerProfesor').children().children().length >=1) {
			if (!$(".sugerMarcada").length && $('#profesor').hasClass('actual')) {
				$('#profesor').removeClass('actual');
				$("#divSugerProfesor>ul>li:last").addClass("sugerMarcada");
				$('#profesor').val($('#divSugerProfesor .sugerMarcada').html());
				$('#profesor').data("id", $('#divSugerProfesor .sugerMarcada').data("id"));
			} else if ( !$("#divSugerProfesor>ul>li:first").hasClass("sugerMarcada") ) {
				$(".sugerMarcada").removeClass("sugerMarcada").prev().addClass('sugerMarcada');
				$('#profesor').val($('#divSugerProfesor .sugerMarcada').html());
				$('#profesor').data("id", $('#divSugerProfesor .sugerMarcada').data("id"));
			} else {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#profesor').addClass('actual');
				$('#profesor').val(pal);
			}
		}
		else if (evento.which == 40 && $('#divSugerProfesor').children().children().length >=1) {
			if (!$(".sugerMarcada").length && $('#profesor').hasClass('actual')) {
				$('#profesor').removeClass('actual');
				$("#divSugerProfesor>ul>li:first").addClass("sugerMarcada");
				$('#profesor').val($('#divSugerProfesor .sugerMarcada').html());
				$('#profesor').data("id", $('#divSugerProfesor .sugerMarcada').data("id"));
			}
			else if ( !$("#divSugerProfesor>ul>li:last").hasClass("sugerMarcada") ) {
				$(".sugerMarcada").removeClass("sugerMarcada")
								  .next()
								  .addClass("sugerMarcada");
				$('#profesor').val($('#divSugerProfesor .sugerMarcada').html());
				$('#profesor').data("id", $('#divSugerProfesor .sugerMarcada').data("id"));
			}
			else {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#profesor').addClass('actual');
				$('#profesor').val(pal);
			}
		}
		else if(evento.which == 37) {
			$('.sugerMarcada').removeClass('sugerMarcada');
			$('#profesor').addClass('actual');
		}
		else if(evento.which == 39) {
			$('.sugerMarcada').removeClass('sugerMarcada');
			$('#profesor').addClass('actual');
		}
		else if (evento.which == 13) {
			if(!$('#profesor').hasClass('actual')) {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#divSugerProfesor').empty().hide();
				$('#profesor').addClass('actual');
			}
			else
				return false;
		}

		else {
			if ($('#profesor').val()==''){
				$("#divSugerProfesor").empty();
				$("#divSugerProfesor").hide();
			}
			else {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#profesor').addClass('actual');
				$("#divSugerProfesor").show();
				$("#divSugerProfesor").empty();
				var ptr = $(this).val();
				pal = ptr;
				$.ajax({
					url: 'php/getprofesores.php',
					type: 'GET',
					data: {patron: ptr},
					dataType: 'json',
					success: function(json) {
						if(json.length==0)
							return false;
						$ulprofesores = $('<ul></ul>');
						$('#divSugerProfesor').append($ulprofesores);
						for(i=0; i<json.length; i++) { //Maximo 10 personas
							var $li = $('<li>'+json[i].nombre+'</li>');
							$li.data("id", json[i].id); //DATA GUARDADA ID DEL PROF
							$li.click(function() {
								$('#profesor').val($(this).html());
								$('#profesor').data("id",$(this).data("id"));
								$("#divSugerProfesor").empty();
								$("#divSugerProfesor").hide();
							});
							$li.hover(function(){
								$(this).css('cursor','pointer');
								$(this).css('background-color','lightgrey');
							},function() {
								$(this).css('cursor','default');
								$(this).css('background-color','');
							});
							$ulprofesores.append($li);
						}
					},
					error: function() {

					}
				});
			}
		}
	});

	$.ajax({
		url: 'php/getfaltas.php',
		dataType: 'json',
		success: function(json) {
			var $inicio = $('<option>Selecciona una falta.</option>');
			$('#divFaltas').append($inicio);

			for(i=0; i<json.length; i++) {
				var truncado = jQuery.trim(json[i].descripcion).substring(0, 100)
				.split(" ").slice(0, -1).join(" ") + "...";
				var $linea = $('<option title="'+json[i].descripcion+'">'+truncado+'</option>');
				$linea.data("id", json[i].id);
				$('#divFaltas').append($linea);
			}
		},
		error: function() {

		}
	});

	$.ajax({
		url: 'php/getmedidas.php',
		dataType: 'json',
		success: function(json) {
			var $inicio = $('<option>Selecciona una medida.</option>');
			$('#divMedidas').append($inicio);
			for(i=0; i<json.length; i++) {
				var truncado = jQuery.trim(json[i].descripcion).substring(0, 100)
				.split(" ").slice(0, -1).join(" ") + "...";
				var $linea = $('<option title="'+json[i].descripcion+'">'+truncado+'</option>');
				$linea.data("id", json[i].id);
				$('#divMedidas').append($linea);
			}
		},
		error: function() {

		}
	});

	$('#envParte').click(function() {
		if($('#numexp').val()!="" && $('#alumno').val()!="" && $('#profesor').val()!="" && $('#profesor').data("id")!="" && $('#divMedidas').val()!='Selecciona una medida.' && $('#divFaltas option.selected').data("id")!="" && $('#divFaltas').val()!='Selecciona una falta.' && $('#divMedidas option.selected').data("id")!="") {
			var user = $('div #numexp').val();
			var prof = $('#profesor').data("id");
			var fecha = $('#fecha').val();
			var idfalta = $('#divFaltas').find(':selected').data("id");
			var idmedida = $('#divMedidas').find(':selected').data("id");
			var parteid;

			$.ajax({
				url: 'php/inserparte.php',
				type: 'GET',
				data: {profesor: prof, alumno: user, fecha: fecha},
				dataType: 'json',
				success: function(json) {
						parteid = json;
						console.log(parteid);
						console.log(idfalta);
						console.log(idmedida);
						$.ajax({
							url: 'php/inserdatos.php',
							type: 'GET',
							data: {parte: parteid, falta: idfalta, medida: idmedida},
							success: function() {
								location.reload();
							}
						});
				}
			});

		}
	});

	$('#anyParte').click(function() {
		if($('#divMedidas').val()!='Selecciona una medida.' && $('#divFaltas').find('option:selected').data("id")!="" && $('#divFaltas').val()!='Selecciona una falta.' && $('#divMedidas').find('option:selected').data("id")!="" ) {

			var falta = $('#divFaltas').find('option:selected').attr('title');
			var medida = $('#divMedidas').find('option:selected').attr('title');

			var $td1 = $('<td>'+falta+'</td>');
			$td1.data("id", $('#divFaltas').find('option:selected').data("id"));

			var $td2 = $('<td>'+medida+'</td>');
			$td2.data("id", $('#divMedidas').find('option:selected').data("id"));

			var $td3 = $('<td><input type="button" class="btn btn-danger" value="Quitar"></td>');
			$td3.click(function() {
				$(this).parent().remove();
			});

			var $tr = $('<tr></tr>').append($td1).append($td2).append($td3);
			$('#faltamedida tbody').append($tr);

			$('#divFaltas').val('Selecciona una falta.').removeData();
			$('#divMedidas').val('Selecciona una medida.').removeData();
			$('#anyParte').addClass('disabled');
			$('#envParte').addClass('disabled');

		}
		else
			console.log("no");
	});

	$('#envTabla').click(function() {
		if($('#faltamedida tbody').children().length>1 && $('#numexp').val()!="" && $('#alumno').val()!="" && $('#profesor').val()!="" && $('#profesor').data("id")!="") {
			var user = $('div #numexp').val();
			var prof = $('#profesor').data("id");
			var fecha = $('#fecha').val();
			var parteid;

			$.ajax({
				url: 'php/inserparte.php',
				type: 'GET',
				data: {profesor: prof, alumno: user, fecha: fecha},
				dataType: 'json',
				success: function(json) {
						parteid = json;
						var iteraciones = $('#faltamedida tbody').children().length-1;
						for(var i=0; i<iteraciones; i++) {
							var pos = i+1;
							var faltaid = $('#faltamedida tbody').children().eq(pos).children().eq(0).data("id");
							var medidaid = $('#faltamedida tbody').children().eq(pos).children().eq(1).data("id");
							$.ajax({
								url: 'php/inserdatos.php',
								type: 'GET',
								data: {parte: parteid, falta: faltaid, medida: medidaid},
								success: function() {
									location.reload();
								}
							});
						}
				}
			});
		}
	});



	//CSS
	$('#divFaltas').on('change',function(){
		if($(this).val()!='Selecciona una falta.')
			if($('#divMedidas').find('option:selected').val()!='Selecciona una medida.')
				$('#anyParte').removeClass('disabled');
	});


	$('#divMedidas').on('change',function(){
		if($(this).val()!='Selecciona una medida.')
			if($('#divFaltas').find('option:selected').val()!='Selecciona una falta.')
				$('#anyParte').removeClass('disabled');
	});


	$('#anyParte').addClass('disabled');
	$('#envParte').addClass('disabled');
	$('#envTabla').addClass('disabled');

	setInterval(function(){
		if($('#numexp').val()!="" && $('#alumno').val()!="" && $('#profesor').val()!="" && $('#profesor').data("id")!="" && $('#divMedidas').val()!='Selecciona una medida.' && $('#divFaltas option.selected').data("id")!="" && $('#divFaltas').val()!='Selecciona una falta.' && $('#divMedidas option.selected').data("id")!="") {
			$('#envParte').removeClass('disabled');
		}
		else
			$('#envParte').addClass('disabled');

		if($('div #numexp').val()!="" && $('#alumno').val()!="" && $('#profesor').val()!="" && $('#profesor').data("id")!="" && $('#faltamedida tbody').children().length >1 ) {
			$('#envTabla').removeClass('disabled');
		}
		else
			$('#envTabla').addClass('disabled');
	}, 300);

	//Consultas

	//1
	var test=true;

	var datos = "";
	$.ajax({
		url: 'php/tabla1.php',
		dataType: 'json',
		success: function(json) {
			if (json.length >=1) {
				var $tabla1 = $('<table class="table table-striped" id="tablaults1"></table>');
				var $tr = $('<tr></tr>');
				var $th1 = $('<th>Fecha</th>');
				var $th2 = $('<th>Alumno</th>');
				var $th3 = $('<th>Grupo</th>');
				var $th4 = $('<th>Profesor</th>');
				$tr.append($th1).append($th2).append($th3).append($th4);
				$tabla1.append($tr);
				$('#page2content #spacet1').append('<br>');
				$('#page2content #spacet1').append($tabla1);
				for (i=0; i<10; i++) { //Donde 15 es el numero de partes que quieras que aparezcan //SI LOS QUIERES TODOS sustituye '15' por !!'json.length'!!
					var fecha = json[i].fecha.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3-$2-$1');
					var $th1 = $('<td>'+fecha+'</td>');
					var $th2 = $('<td><span><img src="img/'+json[i].img+'" style="width: 50px; height:50px;" alt="Foto alumno '+json[i].nombre+'" /></span> '+json[i].nombre+'</td>');
					var $th3 = $('<td>'+json[i].grupo+'</td>');
					var $th4 = $('<td>'+json[i].profesor+'</td>');
					var $tr = $('<tr></tr>');
					$tr.append($th1).append($th2).append($th3).append($th4);
					$tabla1.append($tr);
				}
			}
		},
		async: false
	});

	//FIN 1

	//2

	$("#page2content #numexp2").keydown(function(evento){ //INPUT NEXP
		if(evento.which>=48 && evento.which<=57 || evento.which>=96 && evento.which<=105 || evento.which==8 || evento.which==46 || evento.which>=37 && evento.which<=40 ) {
			return true;
		}
		else
			return false;
	});

	$("#page2content #numexp2").keyup(function(evento){

		if (evento.which == 38 && $('#divSugerAlumno2').children().children().length >=1) {
			if (!$(".sugerMarcada").length && $('#numexp2').hasClass('actual')) {
				$('#numexp2').removeClass('actual');
				$("#divSugerAlumno2>ul>li:last").addClass("sugerMarcada");
				$('#alumno2').val($('#divSugerAlumno2 .sugerMarcada').find('#nombrealu').html());
				$('#numexp2').val($('#divSugerAlumno2 .sugerMarcada').find('#expalu').html());
			} else if ( !$("#divSugerAlumno2>ul>li:first").hasClass("sugerMarcada") ) {
				$(".sugerMarcada").removeClass("sugerMarcada").prev().addClass('sugerMarcada');
				$('#alumno2').val($('#divSugerAlumno2 .sugerMarcada').find('#nombrealu').html());
				$('#numexp2').val($('#divSugerAlumno2 .sugerMarcada').find('#expalu').html());
			} else {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#numexp2').addClass('actual');
				$('#alumno2').val('');
				$('#numexp2').val(pal);
			}
		}
		else if (evento.which == 40 && $('#divSugerAlumno2').children().children().length >=1) {
			if (!$(".sugerMarcada").length && $('#alumno2').hasClass('actual')) {
				//resaltar primera sugerencia
				$('#numexp2').removeClass('actual');
				$("#divSugerAlumno2>ul>li:first").addClass("sugerMarcada");
				$('#alumno2').val($('#divSugerAlumno2 .sugerMarcada').find('#nombrealu').html());
				$('#numexp2').val($('#divSugerAlumno2 .sugerMarcada').find('#expalu').html());
			}
			else if ( !$("#divSugerAlumno2>ul>li:last").hasClass("sugerMarcada") ) {
				$(".sugerMarcada").removeClass("sugerMarcada")
								  .next()
								  .addClass("sugerMarcada");
				$('#alumno2').val($('#divSugerAlumno2 .sugerMarcada').find('#nombrealu').html());
				$('#numexp2').val($('#divSugerAlumno2 .sugerMarcada').find('#expalu').html());
			}
			else {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#numexp2').addClass('actual');
				$('#alumno2').val('');
				$('#numexp2').val(pal);
			}
		}
		else if(evento.which == 37) {
			$('.sugerMarcada').removeClass('sugerMarcada');
			$('#numexp2').addClass('actual');
		}
		else if(evento.which == 39) {
			$('.sugerMarcada').removeClass('sugerMarcada');
			$('#numexp2').addClass('actual');
		}
		else if (evento.which == 13) {
			if(!$('#numexp2').hasClass('actual')) {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#divSugerAlumno2').empty().hide();
				$('#numexp2').addClass('actual');
				submitalumnos();
			}
			else
				return false;
		}

		else {
			if ($('#numexp2').val()==''){
				$("#divSugerAlumno2").empty();
				$("#divSugerAlumno2").hide();
			}
			else {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#numexp2').addClass('actual');
				$("#divSugerAlumno2").empty();
				$("#divSugerAlumno2").show();

				var ptr = $(this).val();
				pal = ptr;
				$.ajax({
					url: 'php/getnumexp.php',
					type: 'GET',
					data: {patron: ptr},
					dataType: 'json',
					success: function(json) {
						if(json.length==0)
							return false;
						$ulalumnos = $('<ul></ul>');
						$('#divSugerAlumno2').append($ulalumnos);
						for(i=0; i<20; i++) { //Maximo de 20 personas
							var $li = $('<li><span id="img"><img src="img/'+json[i].img+'" style="width: 50px; height:50px;" alt="Foto alumno '+json[i].nombre+'"></span><span id="expalu">'+json[i].numexped+'</span>-<span id="nombrealu">'+json[i].nombre+'</span>-'+json[i].grupo+'</li>');
							$li.addClass("seleccion");
							$li.click(function() {
								$('#alumno2').val($(this).find('#nombrealu').html());
								$('#numexp2').val($(this).find('#expalu').html())
								$("#divSugerAlumno2").empty();
								$("#divSugerAlumno2").hide();
								submitalumnos();
							});
							$li.hover(function(){
								$(this).css('cursor','pointer');
								$(this).css('background-color','lightgrey');
							},function() {
								$(this).css('cursor','default');
								$(this).css('background-color','');
							});
							$ulalumnos.append($li);
						}
					},
					error: function() {

					}
				});
			}
		}
	});

	$("#page2content #alumno2").keyup(function(evento){ //INPUT ALUMNO

		if (evento.which == 38 && $('#divSugerAlumno2').children().children().length >=1) {
			if (!$(".sugerMarcada").length && $('#alumno2').hasClass('actual')) {
				$('#alumno2').removeClass('actual');
				$("#divSugerAlumno2>ul>li:last").addClass("sugerMarcada");
				$('#alumno2').val($('#divSugerAlumno2 .sugerMarcada').find('#nombrealu').html());
				$('#numexp2').val($('#divSugerAlumno2 .sugerMarcada').find('#expalu').html());
			} else if ( !$("#divSugerAlumno2>ul>li:first").hasClass("sugerMarcada") ) {
				$(".sugerMarcada").removeClass("sugerMarcada").prev().addClass('sugerMarcada');
				$('#alumno2').val($('#divSugerAlumno2 .sugerMarcada').find('#nombrealu').html());
				$('#numexp2').val($('#divSugerAlumno2 .sugerMarcada').find('#expalu').html());
			} else {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#alumno2').addClass('actual');
				$('#alumno2').val(pal);
				$('#numexp2').val('');
			}
		}
		else if (evento.which == 40 && $('#divSugerAlumno2').children().children().length >=1) {
			if (!$(".sugerMarcada").length && $('#alumno2').hasClass('actual')) {
				//resaltar primera sugerencia
				$('#alumno2').removeClass('actual');
				$("#divSugerAlumno2>ul>li:first").addClass("sugerMarcada");
				$('#alumno2').val($('#divSugerAlumno2 .sugerMarcada').find('#nombrealu').html());
				$('#numexp2').val($('#divSugerAlumno2 .sugerMarcada').find('#expalu').html());
			}
			else if ( !$("#divSugerAlumno2>ul>li:last").hasClass("sugerMarcada") ) {
				$(".sugerMarcada").removeClass("sugerMarcada")
								  .next()
								  .addClass("sugerMarcada");
				$('#alumno2').val($('#divSugerAlumno2 .sugerMarcada').find('#nombrealu').html());
				$('#numexp2').val($('#divSugerAlumno2 .sugerMarcada').find('#expalu').html());
			}
			else {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#alumno2').addClass('actual');
				$('#alumno2').val(pal);
				$('#numexp2').val('');
			}
		}
		else if(evento.which == 37) {
			$('.sugerMarcada').removeClass('sugerMarcada');
			$('#alumno2').addClass('actual');
		}
		else if(evento.which == 39) {
			$('.sugerMarcada').removeClass('sugerMarcada');
			$('#alumno2').addClass('actual');
		}
		else if (evento.which == 13) {
			if(!$('#alumno2').hasClass('actual')) {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#divSugerAlumno2').empty().hide();
				$('#alumno2').addClass('actual');
				submitalumnos();
			}
			else
				return false;
		}

		else {
			if ($('#alumno2').val()==''){
				$("#divSugerAlumno2").empty();
				$("#divSugerAlumno2").hide();
			}
			else {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#alumno2').addClass('actual');
				$("#divSugerAlumno2").empty();
				$("#divSugerAlumno2").show();
				var ptr = $(this).val();
				pal = ptr;
				$.ajax({
					url: 'php/getalumnos.php',
					type: 'GET',
					data: {patron: ptr},
					dataType: 'json',
					success: function(json) {
						if(json.length==0)
							return false;
						$ulalumnos = $('<ul></ul>');
						$('#divSugerAlumno2').append($ulalumnos);
						for(i=0; i<20; i++) { //Maximo 20 alumnos
							var $li = $('<li><span id="img"><img src="img/'+json[i].img+'" style="width: 50px; height:50px;" alt="Foto alumno '+json[i].nombre+'"></span><span id="expalu">'+json[i].numexped+'</span>-<span id="nombrealu">'+json[i].nombre+'</span>-'+json[i].grupo+'</li>');
							$li.click(function() {
								$('#alumno2').val($(this).find('#nombrealu').html());
								$('#numexp2').val($(this).find('#expalu').html())
								$("#divSugerAlumno2").empty();
								$("#divSugerAlumno2").hide();
								submitalumnos();
							});
							$li.hover(function(){
								$(this).css('cursor','pointer');
								$(this).css('background-color','lightgrey');
							},function() {
								$(this).css('cursor','default');
								$(this).css('background-color','');
							});
							$ulalumnos.append($li);
						}

						$('#divSugerAlumno2').append('</table>');
					},
					error: function() {

					}
				});
			}
		}
	});

	$('#page2content #consultasalumno').click(function() {
		submitalumnos();
	});

	$('#page2content #limpiarconsultasalumno').click(function() {
		$('#page2content #consultaalumnostabla tbody td').parent().remove();
		$('#numexp2').val('');
		$('#alumno2').val('');
	});
	//FIN 2

	//3

	$("#page2content #profesor2").keyup(function(evento){

		if (evento.which == 38 && $('#divSugerProfesor2').children().children().length >=1) {
			if (!$(".sugerMarcada").length && $('#profesor').hasClass('actual')) {
				$('#profesor2').removeClass('actual');
				$("#divSugerProfesor2>ul>li:last").addClass("sugerMarcada");
				$('#profesor2').val($('#divSugerProfesor2 .sugerMarcada').html());
				$('#profesor2').data("id", $('#divSugerProfesor2 .sugerMarcada').data("id"));
			} else if ( !$("#divSugerProfesor2>ul>li:first").hasClass("sugerMarcada") ) {
				$(".sugerMarcada").removeClass("sugerMarcada").prev().addClass('sugerMarcada');
				$('#profesor2').val($('#divSugerProfesor2 .sugerMarcada').html());
				$('#profesor2').data("id", $('#divSugerProfesor2 .sugerMarcada').data("id"));
			} else {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#profesor2').addClass('actual');
				$('#profesor2').val(pal);
			}
		}
		else if (evento.which == 40 && $('#divSugerProfesor2').children().children().length >=1) {
			if (!$(".sugerMarcada").length && $('#profesor2').hasClass('actual')) {
				$('#profesor2').removeClass('actual');
				$("#divSugerProfesor2>ul>li:first").addClass("sugerMarcada");
				$('#profesor2').val($('#divSugerProfesor2 .sugerMarcada').html());
				$('#profesor2').data("id", $('#divSugerProfesor2 .sugerMarcada').data("id"));
			}
			else if ( !$("#divSugerProfesor2>ul>li:last").hasClass("sugerMarcada") ) {
				$(".sugerMarcada").removeClass("sugerMarcada")
								  .next()
								  .addClass("sugerMarcada");
				$('#profesor2').val($('#divSugerProfesor2 .sugerMarcada').html());
				$('#profesor2').data("id", $('#divSugerProfesor2 .sugerMarcada').data("id"));
			}
			else {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#profesor2').addClass('actual');
				$('#profesor2').val(pal);
			}
		}
		else if(evento.which == 37) {
			$('.sugerMarcada').removeClass('sugerMarcada');
			$('#profesor2').addClass('actual');
		}
		else if(evento.which == 39) {
			$('.sugerMarcada').removeClass('sugerMarcada');
			$('#profesor2').addClass('actual');
		}
		else if (evento.which == 13) {
			if(!$('#profesor2').hasClass('actual')) {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#divSugerProfesor2').empty().hide();
				$('#profesor2').addClass('actual');

				submitprofesores();
			}
			else
				return false;
		}


		else {
			if ($('#profesor2').val()==''){
				$("#divSugerProfesor2").empty();
				$("#divSugerProfesor2").hide();
			}
			else {
				$('.sugerMarcada').removeClass('sugerMarcada');
				$('#profesor2').addClass('actual');
				$("#divSugerProfesor2").show();
				$("#divSugerProfesor2").empty();
				var ptr = $(this).val();
				pal = ptr;
				$.ajax({
					url: 'php/getprofesores.php',
					type: 'GET',
					data: {patron: ptr},
					dataType: 'json',
					success: function(json) {
						$ulprofesores = $('<ul></ul>');
						$('#divSugerProfesor2').append($ulprofesores);
						for(i=0; i<json.length; i++) { //Maximo 10 personas
							var $li = $('<li>'+json[i].nombre+'</li>');
							$li.data("id", json[i].id); //DATA GUARDADA ID DEL PROF
							$li.click(function() {
								$('#profesor2').val($(this).html());
								$('#profesor2').data("id",$(this).data("id"));
								$("#divSugerProfesor2").empty();
								$("#divSugerProfesor2").hide();
								submitprofesores();
							});
							$li.hover(function(){
								$(this).css('cursor','pointer');
								$(this).css('background-color','lightgrey');
							},function() {
								$(this).css('cursor','default');
								$(this).css('background-color','');
							});
							$ulprofesores.append($li);
						}
					},
					error: function() {

					}
				});
			}
		}
	});

	$('#consultasprofesor').click(function() {
		submitprofesores();
	});

	$('#page2content #limpiarconsultasprofesor').click(function() {
		$('#page2content #consultaprofesortabla tbody td').parent().remove();
		$('#profesor2').val('');
	});
	//FIN 3

	//4

	$("#page2content #anyoconsultas").keydown(function(evento){ //INPUT NEXP
		if(evento.which>=48 && evento.which<=57 || evento.which>=96 && evento.which<=105 || evento.which==8 || evento.which==46 || evento.which>=37 && evento.which<=40 ) {
			return true;
		}
		else
			return false;
	});

	$("#page2content #anyoconsultas").keypress(function(ev) {
		var tamanyo = $('#anyoconsultas').val();
		if(tamanyo.length>3)
			return false;
	});


	$('#consultasfechas').click(function() {
		if( $('#anyoconsultas').val() != "" && $('#mesanyoconsulta').find('option:selected').val() != "Selecciona un mes" &&$('#mesanyoconsulta').find('option:selected').val() >=1 && $('#mesanyoconsulta').find('option:selected').val() <= 12) {

			$('#page2content #consultasfechastabla tbody td').parent().remove();

			var anyo = $('#anyoconsultas').val();
			var mes = $('#mesanyoconsulta').find('option:selected').val();

			var fechacom = anyo+'-'+mes+'-00';
			var fechaend = anyo+'-'+mes+'-31';

			$.ajax({
				url: 'php/getpartesanyo.php',
				type: 'POST',
				data: {fc: fechacom, fs: fechaend},
				dataType: 'json',
				success: function(json) {
					if (json.length >=1) {
						for(i=0; i<json.length; i++) {
							var $tr = $('<tr></tr>');
							var $td1 = $('<td>'+json[i].fecha+'</td>');
							var $td2 = $('<td>'+json[i].nombre+'</td>');
							var $td3 = $('<td>'+json[i].grupo+'</td>');
							var $td4 = $('<td>'+json[i].profesor+'</td>');
							$tr.append($td1).append($td2).append($td3).append($td4);
							$('#page2content #consultasfechastabla tbody').append($tr);
						}
					}
					else {
						var $tr = $('<tr></tr>');
						var $td1 = $('<td colspan="4" class="text-center"><h4>Opss parece que no hay nada en este mes...</h4></td>');
						$tr.append($td1);
						$('#page2content #consultasfechastabla tbody').append($tr);
					}
				}
			});
		}
	});

	$('#page2content #limpiarconsultasfechas').click(function() {
		$('#page2content #consultasfechastabla tbody td').parent().remove();
		$('#anyoconsultas').val('');
		$('#mesanyoconsulta').val(0);
	});
	//FIN 4

	//Estadisticas

	//1

	var alumnos10 = [];
	var partes10 = [];
	$.ajax({
		url: 'php/getmaxpartes10.php',
		type: 'POST',
		dataType: 'json',
		success: function(json) {
			for(i=0; i<10; i++) {
				alumnos10[i] = json[i].nombre+" - "+json[i].grupo;
				partes10[i] = json[i].partes;
			}
		},
		async: false,
	});

	var ctx = document.getElementById("estadisticas1").getContext('2d');

	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: alumnos10, //alumnos
			datasets: [{
				label: '# de partes',
				data: partes10, //Cada alumno los partes
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(0, 102, 102, 0.2)', //1
					'rgba(0, 204, 102, 0.2)',
					'rgba(255, 255, 153, 0.2)',
					'rgba(255, 51, 204, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
					'rgba(0, 102, 102, 1)', //1
					'rgba(0, 204, 102, 1)',
					'rgba(255, 255, 153, 1)',
					'rgba(255, 51, 204, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				xAxes: [{
					display: false
				}],
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});


	//FIN 1

	//2
	var grupos5 = [];
	var partes5 = [];
	$.ajax({
		url: 'php/getmaxgrupos5.php',
		type: 'POST',
		dataType: 'json',
		success: function(json) {
			for(i=0; i<5; i++) {
				grupos5[i] = json[i].grupo;
				partes5[i] = json[i].partes;
			}
		},
		async: false,
	});

	var ctx = document.getElementById("estadisticas2").getContext('2d');

	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: grupos5, //alumnos
			datasets: [{
				label: '# de partes',
				data: partes5, //Cada alumno los partes
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});

	//FIN 2

	//3
	var prof5 = [];
	var profpartes5 = [];
	$.ajax({
		url: 'php/getmaxprof5.php',
		type: 'POST',
		dataType: 'json',
		success: function(json) {
			for(i=0; i<5; i++) {
				prof5[i] = json[i].nombre;
				profpartes5[i] = json[i].partes;
			}
		},
		async: false,
	});

	var ctx = document.getElementById("estadisticas3").getContext('2d');

	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: prof5, //alumnos
			datasets: [{
				label: '# de partes',
				data: profpartes5, //Cada alumno los partes
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				xAxes: [{
					display: false
				}],
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});
	//FIN 3

	//4
	var cursos4 = ['ESO', 'Bachiller', 'FP']
	var partes4 = [0, 0, 0];

	$.ajax({
		url: 'php/getmaxciclos3.php',
		type: 'POST',
		dataType: 'json',
		success: function(json) {
			for (i=0; i<json.length; i++) {
				if(json[i].nombre.charAt(0) == 'E'  )
					partes4[0]++;
				else if(json[i].nombre.charAt(0) == 'B' )
					partes4[1]++;
				else
					partes4[2]++;
			}
		},
		async: false,
	});

		var ctx = document.getElementById("estadisticas4").getContext('2d');

	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: cursos4, //alumnos
			datasets: [{
				label: '# de partes',
				data: partes4, //Cada alumno los partes
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});
	//FIN 4
});

function submitalumnos() {
	if($('#page2content #numexp2').val() != "" && $('#page2content #alumno2').val() != "") {
		var $exp = $('#page2content #numexp2').val();
		$('#consultaalumnostabla tbody td').parent().remove();

		$.ajax({
			url: 'php/buscarfaltaporexp.php',
			type: 'POST',
			data: {id: $exp},
			dataType: 'xml',
			success: function(xml) {
				if($(xml).find('parte').length>=1) {
				$(xml).find('parte').each(function() {
					console.log($(this).children().eq(0).html());
					var $tr = $('<tr></tr>');
					var $td1 = $('<td>'+$(this).children().eq(0).html()+'</td>');
					var $td2 = $('<td>'+$(this).children().eq(1).html()+'</td>');
					$tr.append($td1).append($td2);
					$('#consultaalumnostabla tbody').append($tr);
				});
				}
				else
					$('#consultaalumnostabla tbody').append('<tr><td colspan="2">Este alumno no tiene partes</td></tr>');
			}
		});
	}
}

function submitprofesores() {
	if($('#profesor2').val() != "" && $('#profesor2').data("id") != "") {
			var $id = $('#profesor2').data("id");
			$('#page2content #consultaprofesortabla tbody td').parent().remove();

			$.ajax({
				url: 'php/phppartesprofesor2.php',
				type: 'POST',
				data: {id: $id},
				dataType: 'xml',
				success: function(xml) {
					if($(xml).find('parte').length>=1) {
					$(xml).find('parte').each(function() {
						var $tr = $('<tr></tr>');
						var $td1 = $('<td>'+$(this).children().eq(0).html()+'</td>');
						var $td2 = $('<td>'+$(this).children().eq(1).html()+'</td>');
						var $td3 = $('<td>'+$(this).children().eq(2).html()+'</td>');
						$tr.append($td1).append($td2).append($td3);
						$('#consultaprofesortabla tbody').append($tr);
					});
					}
					else
						$('#consultaprofesortabla tbody').append('<tr><td colspan="2">Este profesor no ha puesto ningun parte</td></tr>');
				}
			});
		}
		else
			return false;
}

// JavaScript Document
$(document).ready(function(){
		var validacion = '';
	
		// Validando Mensaje ===========================
		if( $('#mensaje').val() == '' ){
			validacion += '<p>Gracias por escribirnos</p>';
		}
			
		// ENVIANDO MENSAJE ============================
		if( validacion == '' == false){
			var mensajeModal =	'<div class="modal_wrap">'+
									'<div class="mensaje_modal">'+
										'<h3 class="email-wrap">mensaje enviado con exito!!</h3>'+
										validacion+
										'<span class="btn_close" id="btnClose">Cerrar</span>'
									'</div>'+
								'</div>';

			$('body').append(mensajeModal);
		}else{
                   

			$('body').append(mensajeModal);
                }

		// CERRANDO MODAL ==============================
		$('#btnClose').click(function() {
			$('.modal_wrap').remove();
		});
	});

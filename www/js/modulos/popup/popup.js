(function($){
	/*
	* Funcao para abertura de popup do APP
	* @author Michael Araujo
	*/
   $.fn.abrirPopup = function(popup) {
   		if(typeof popup !== "undefined") {
   			$("#"+popup+"").popup("open");
   		} else {
   			return false;
   		}
   }; 
})(jQuery);
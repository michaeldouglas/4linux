(function($){
	/*
	* Funcao para validacao dos dados de compra
	* @author Michael Araujo
	*/
   $.fn.validaCompra = function(nomeDoProduto, valorDoProduto) {
         nomeDoProdutoInput = nomeDoProduto.val();
         valorDoProdutoInput = valorDoProduto.val();
         
   		/*if((nomeDoProduto == "" || valorDoProduto == "")
            ||
            (nomeDoProduto == "" && valorDoProduto !== "")
            ||
            (nomeDoProduto !== "" && valorDoProduto == "")) {*/
         
         if(nomeDoProdutoInput == "" && valorDoProdutoInput == "") {            
            return false;
         } else if(nomeDoProdutoInput != "" && valorDoProdutoInput != "") {
               return true;
         }  else if(nomeDoProdutoInput != "" && valorDoProdutoInput == "") {
            return true;
         }
         else {
               return true;
         }
   }; 
})(jQuery);
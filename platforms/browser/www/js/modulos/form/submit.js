$( document ).ready(function() {
	$("#enviar-compra").click(function(){
		
		var nomeProduto = $("#nome-produto");
		var valorProduto = $("#valor-produto");
		
		if($().validaCompra(nomeProduto, valorProduto)){
			$("#form-pagamento").submit();
		} else {
			$("#dados-input").html("Nome do produto").css({"color": "red"});
			$().abrirPopup("popupDadosInvalidos");
		}
	});
});
// JavaScript Document

$(document).ready(function(){
	$('.modal-web').hide();
	$('.mask').hide();
	$('.botao-fechar').hide();
	$('.clipping-chamada-web').click(function(){
		$('.modal-web').show();
		$('.mask').show();
		$('.botao-fechar').show();
	});
	$('.botao-fechar').click(function(){
		$('.modal-web').hide();
		$('.mask').hide();
		$('.botao-fechar').hide();
	});
	$('.clipping-descricao-web').click(function(){
		$('.modal-web').show();
		$('.mask').show();
		$('.botao-fechar').show();
	});
	$('.botao-fechar').click(function(){
		$('.modal-web').hide();
		$('.mask').hide();
		$('.botao-fechar').hide();
	});
});
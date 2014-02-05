// JavaScript Document

$(document).ready(function(){
	$('.modal-impresso').hide();
	$('.mask').hide();
	$('.botao-fechar').hide();
	$('.clipping-chamada-impresso').click(function(){
		$('.modal-impresso').show();
		$('.mask').show();
		$('.botao-fechar').show();
	});
	$('.botao-fechar').click(function(){
		$('.modal-impresso').hide();
		$('.mask').hide();
		$('.botao-fechar').hide();
	});
	$('.clipping-descricao-impresso').click(function(){
		$('.modal-impresso').show();
		$('.mask').show();
		$('.botao-fechar').show();
	});
	$('.botao-fechar').click(function(){
		$('.modal-impresso').hide();
		$('.mask').hide();
		$('.botao-fechar').hide();
	});
});
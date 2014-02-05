// JavaScript Document

$(document).ready(function(){
	$('.modal-radio').hide();
	$('.mask').hide();
	$('.botao-fechar').hide();
	$('.clipping-chamada-radio').click(function(){
		$('.modal-radio').show();
		$('.mask').show();
		$('.botao-fechar').show();
	});
	$('.botao-fechar').click(function(){
		$('.modal-radio').hide();
		$('.mask').hide();
		$('.botao-fechar').hide();
	});
	$('.clipping-descricao-radio').click(function(){
		$('.modal-radio').show();
		$('.mask').show();
		$('.botao-fechar').show();
	});
	$('.botao-fechar').click(function(){
		$('.modal-radio').hide();
		$('.mask').hide();
		$('.botao-fechar').hide();
	});
});
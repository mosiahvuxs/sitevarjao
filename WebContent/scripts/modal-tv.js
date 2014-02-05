// JavaScript Document

$(document).ready(function(){
	$('.modal-tv').hide();
	$('.mask').hide();
	$('.botao-fechar').hide();
	$('.clipping-chamada-tv').click(function(){
		$('.modal-tv').show();
		$('.mask').show();
		$('.botao-fechar').show();
	});
	$('.botao-fechar').click(function(){
		$('.modal-tv').hide();
		$('.mask').hide();
		$('.botao-fechar').hide();
	});
	$('.clipping-descricao-tv').click(function(){
		$('.modal-tv').show();
		$('.mask').show();
		$('.botao-fechar').show();
	});
	$('.botao-fechar').click(function(){
		$('.modal-tv').hide();
		$('.mask').hide();
		$('.botao-fechar').hide();
	});
});
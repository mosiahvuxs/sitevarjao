// JavaScript Document

$(document).ready(function(){
		$('.submenu-atuacao').hide();
		$('.item-menu-atuacao').mouseenter(function(){
			$('.submenu-atuacao').show();
			$('.sombra-wrapper-submenu').show();
			$('.submenu-atuacao').css('margin-top', '-5px');
			$('.submenu-quem-somos').hide();
			$('.submenu-clientes').hide();
			$('.item-menu-atuacao a').css({
				'background-color': '#0c5d9e',
				'padding': '10px 4px',
				'color': 'white',
				'margin': '0px 0px 0px -8px',
				'border-radius': '10px 10px 0px 0px' 
				});
			$('.item-menu-quem-somos a').css({
				'background-color': 'transparent',
				'color': '#636466',
				});
			$('.item-menu-clientes a').css({
				'background-color': 'transparent',
				'color': '#636466',
				});
			});
			$('.submenu-atuacao').mouseenter(function(){
			$('.submenu-atuacao').show();
			$('.sombra-wrapper-submenu').show();
			$('.submenu-atuacao').css('margin-top', '-5px');
			$('.submenu-quem-somos').hide();
			$('.submenu-clientes').hide();
			$('.item-menu-atuacao a').css({
				'background-color': '#0c5d9e',
				'padding': '10px 4px',
				'color': 'white',
				'margin': '0px 0px 0px -8px',
				'border-radius': '10px 10px 0px 0px' 
				});
			$('.item-menu-quem-somos a').css({
				'background-color': 'transparent',
				'color': '#636466',
				});
			$('.item-menu-clientes a').css({
				'background-color': 'transparent',
				'color': '#636466',
				});
			});			
			$('.submenu-atuacao').mouseleave(function(){
			$('.submenu-atuacao').hide();
			$('.sombra-wrapper-submenu').hide();
			$('.item-menu-atuacao a').css({
				'background-color': 'transparent',
				'color': '#636466',
				});
			$('.submenu-quem-somos').show();
			$('.sombra-wrapper-submenu').show();
			$('.submenu-quem-somos').css('margin-top', '-5px');
			$('.submenu-atuacao').hide();
			$('.submenu-clientes').hide();
			$('.item-menu-quem-somos a').css({
				'background-color': '#0c5d9e',
				'padding': '10px 4px',
				'color': 'white',
				'margin': '0px 0px 0px -8px',
				'border-radius': '10px 10px 0px 0px' 
				});
			});
			$('.item-menu-atuacao').mouseleave(function(){
			$('.submenu-atuacao').hide();
			$('.sombra-wrapper-submenu').hide();
			$('.item-menu-atuacao a').css({
				'background-color': 'transparent',
				'color': '#636466',
				});
			$('.submenu-quem-somos').show();
			$('.sombra-wrapper-submenu').show();
			$('.submenu-quem-somos').css('margin-top', '-5px');
			$('.submenu-atuacao').hide();
			$('.submenu-clientes').hide();
			$('.item-menu-quem-somos a').css({
				'background-color': '#0c5d9e',
				'padding': '10px 4px',
				'color': 'white',
				'margin': '0px 0px 0px -8px',
				'border-radius': '10px 10px 0px 0px' 
				});
			});
		});
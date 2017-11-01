/*
 * ************************************************************* *
 * Name       : demo                                             *
 * Date       : March 2012                                       *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.0                                              *
 * Updated    : --/--/----                                       *
 * Changelog  :                                                  *
 * Developer  : Mark                                             *
 * Dependency : see below                                        *
 * Lib        : see plugin                                       *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */
   
$(document).ready(function($){

	// index.html
	if(document.location.pathname.indexOf('index') >-1 ){

		// growl
		 $.e_notify.growl({
			 title: '赵萌儿向你求助：',
			 text: '请问如何在Word页脚部分插入图片和视频？',
			 image: 'images/users/user-4.jpg',
			 position: 'right-bottom',
			 delay: 0,
			 time: 2500,
			 speed: 600,
			 effect: 'fade',
			 sticky: false,
			 closable: true,
			 maxOpen:3,
			 className:'',
			 onShow: function(){},
			 onHide: function(){}
		});	
	
		// lockscreen
/*
		setTimeout(function(){
			$('#lockscreen-target')
			.show()
			.find('.lockscreen-modal')
			.addClass('ls-pulse animated shake')
			.find('.lockscreen-placeholder').lockScreen({
				type:'form',           
				unlockText: 'Type something...',   
				delayUnlock: 200,       
				unlockAt: 100,         
				submitText:'Login',    
				formAction:'ajax/lockscreen.php', 
				minChar:3,          
				start:function(){},     
				fail:function(){},      
				success:function(){
					$.nanoGress.start({target: '#lockscreen-target'});
					$.nanoGress.end({onEnd:function(){
						$('#lockscreen-target').hide();	
					}});
				}
			});
		},5000);
*/		
	}
	
	// activity stream			
	setTimeout(function(){
		$('#as-item-1').slideDown(600);
	},6000);
	setTimeout(function(){
		$('#as-item-2').slideDown(600);
	},12000);

});

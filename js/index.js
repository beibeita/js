window.onload=function(){
	function $(selector){
		return document.getElementById(selector);
	}
	$('moreProduct').onmouseover=function(){
		$('moreProduct-area').style.display='block';
	}
	$('moreProduct').onmouseleave=function(){
		$('moreProduct-area').style.display='none';
	}
	$('moreProduct-area').onmouseover=function(){
		$('moreProduct-area').style.display='block';
	}
	$('moreProduct-area').onmouseleave=function(){
		$('moreProduct-area').style.display='none';
	}
	$('photo1').onclick=function(){
		$('search-text-box1').style.display='none';
		$('photo-area').style.display='block';
		
	}
	
	$('close').onclick=function(){
		$('search-text-box1').style.display='block';
		$('photo-area').style.display='none';
		
		
	}
	
	
	
}

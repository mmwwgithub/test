$(function(){
 var nUli = -1;
 var m=1;
 var oAudio = document.createElement('audio');

    $('#floatDiv').on('click',function(){
    	//播放点击图片音效
        oAudio.src = 'audio/2.wav';
        oAudio.play();
        m++;
    	nUli++;
    	var navUli = $('#ul_nav li');
    	var navUliR = $('#ul_navR li');

     //var oLiR0 = $('#ul_navR li')[0];
     var addImg = $(this).find('img').eq(0);
           //克隆
      var cloneImg = addImg.clone(); 
          // cloneImg.removeAttr("src");
           cloneImg.css({
           	  'width':'100%',
           	  'height':'100%',
           	  'position':'relative',
           	  'top':addImg.offset().top,
           	  'left':addImg.offset().left,
           	  'z-index':1000,
               //'opacity':'.8'  
              'border-radius':'50%',
              'box-shadow':'5px 5px 13px rgba(255,0,255,1)'        
           });
            
            cloneImg.appendTo(navUli[nUli]).animate({
               'width':-100,//先缩放的宽度
           	   'height':-100,//先缩放的高度
           	   'top':0,
           	   'left':0           	   
           },1000,function(){
           	     cloneImg.animate({
           		'width':'100%',
           		'height':'100%',
           	},function(){
           		$("#img").css({"width":"100%","height":"100%"});
           		               
               //更换左边li的图片路径     
                cloneImg.attr("src",'img_li/'+(m-1)+'.png');
                //更换浮动框里图片路径
                $("#img").attr("src",'imgNum/'+m+'.jpg');
                
                //播放更换图片音效
                oAudio.src = 'audio/1.wav';
                oAudio.play();
   if(m>5){ 
                	//m=1;             	
                   $('#floatDiv').detach(); 
                   return m;
                };
           	});
           });
       });

 var timer;
     	//alert("ddd");
     	function start(){
         m++;
    	nUli++;
    	var navUli = $('#ul_nav li');
    	var navUliR = $('#ul_navR li');

     var addImg = $('#floatDiv').find('img').eq(0);
           //克隆
      var cloneImg = addImg.clone(); 
           cloneImg.css({
           	  'width':'100%',
           	  'height':'100%',
           	  'position':'relative',
           	  'top':addImg.offset().top,
           	  'left':addImg.offset().left,
           	  'z-index':1000,
               //'opacity':'.8'  
              'border-radius':'50%',
              'box-shadow':'15px 15px 13px rgba(255,0,255,1)'       
           });
            
            cloneImg.appendTo(navUli[nUli]).animate({
               'width':-100,//先缩放的宽度
           	   'height':-100,//先缩放的高度
           	   'top':0,
           	   'left':0           	   
           },500,function(){
           	     cloneImg.animate({
           		'width':'100%',
           		'height':'100%',
           	},function(){
           		$("#img").css({"width":"100%","height":"100%"});
           		
               
               
                //更换浮动框里图片路径
                $("#img").attr("src",'imgNum/'+m+'.jpg');
                //更换左边li的图片路径     
                cloneImg.attr("src",'img_li/'+(m-1)+'.png');
                //播放更换图片音效
                oAudio.src = 'audio/1.wav';
                oAudio.play();
                  if(m>5){ 
                	//m=1;             	
                   $('#floatDiv').detach(); 
                   clearInterval(timer);
                   return m;
                }; 
           	});
           });

}

    $('#quickBtn').click(function(){
/*    	oAudio.src = 'audio/auto_page.wav';
         oAudio.play();*/
	timer = window.setInterval(start,1000);
})
  });
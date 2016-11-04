$(function(){
    var showFlag = false;
    var tButton = $('#twitter-follow-button');
// 最初はボタンを隠しておく
    tButton.css('bottom', '-400px');
    $(window).resize(btnShow);
    $(window).scroll(btnShow);
 
    function btnShow(){
        scrollHeight = $(document).height();
        scrollPosition = window.innerHeight + $(window).scrollTop();
        if ( (scrollHeight - scrollPosition) / scrollHeight <= 0.05) {
            // ボタンが出てくる
            if(showFlag == false){
                showFlag = true;
                tButton.stop(true, false).animate({'bottom': '-15px'}, 300).animate({'bottom': '-30px'}, 200);
            }
        } else{
            // ボタンが消える
            if(showFlag){
                showFlag = false;
                tButton.stop(true, false).animate({'bottom': '-15px'}, 200).animate({'bottom' : '-400px'}, 300);
            }
        }
    }
    
	tButton.hover(function(){
	        $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
	        tButton.stop(true, false).animate({'bottom' : '-15px'}, 100).animate({'bottom' : '-30px'}, 100);
	    }, function(){
	        if(!$(this).hasClass('current')){
	            $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
	        }
	});
});
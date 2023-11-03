$(document).ready(function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        console.log('phone');
        
    }else{
        console.log('pc');
        //$('.footer').html('<h1>open in mobile | reload</h1>');
    }
    $('#nikname').val('User'+Math.floor( Math.random() * 1000));
    function notify(txt='',status='warning'){
        id = 'notif_'+Math.floor( Math.random() * 100 )
        if (status=='success'){
            html = '<div id="'+id+'" class="notification_box success"><span style="color: black;">'+txt+'</span> <i class="fa-solid fa-circle-check"></i></div>'
        }
        if (status=='failure'){
            html = '<div id="'+id+'" class="notification_box failure"><span style="color: black;">'+txt+'</span> <i class="fa-solid fa-circle-xmark"></i></div>'
        }
        if (status=='warning'){
            html = ' <div id="'+id+'" class="notification_box warning"><span style="color: black;">'+txt+'</span> <i class="fa-solid fa-triangle-exclamation"></i></i></div>'
        }
        $('.notification_div').html($('.notification_div').html()+html);
        
        setTimeout(function(){
            $('.notification_box:first' ).animate({ 
                'margin-right' : '-350px',
            },{ duration: 290, queue: false });
        }, 3000)
        setTimeout(function(){
            $('.notification_box:first').remove();
        }, 3290)
       
    }


    //do sth when window resized
    $(window).resize(function() { 
        //$('.main_content').css('height', ($('html').height()-105)+'px') 
    }); 
    $(window).trigger("resize");


    //setTimeout(function(){$('.prof_pic').trigger( "click" );}, 5000) // fake notification


    $('.sign_in').click(function (e) { 
        //$('.nav').trigger("click");
        notify(txt='under maintenance'  , 'warning' )

        // if ($('.prof_pic').hasClass('shake')){
        // }else{
        //     $('.red_dot').toggleClass("hide");
        //     $(this).addClass('shake');
        //     $(this).width();
        //     setTimeout(function(){$('.prof_pic').removeClass('shake');}, 800)
        // }
    })
    $('.nav').click(function (e) { 
        notify(txt='there is no purpose'  , 'failure' )

        statuss = ['failure','success','warning']
        text = ['successfully failed ', 'Internal Server Error', 'Bad Request', 'Unauthorized', 'Forbidden', 'Gateway Timeout', 'Service Unavailable', 'Network Connection Error', 'DNS Resolution Failure', 'Cross-Origin Request Blocked', 'SSL/TLS Handshake Failure', 'Invalid URL', 'Invalid Input Data', 'Session Expired', 'Database Connection Error', 'File Upload Failure', 'Out of Memory Error', 'Script Error', 'Resource Not Available', 'Permission Denied', 'Session Timeout']
        stat = statuss[Math.floor( Math.random() * statuss.length )]
        //notify(txt=text[Math.floor( Math.random() * text.length )]  ,stat)
    })
    $('.play_btn').click(function (e) { 
        notify(txt= $('#nikname').val()+' ...'  , 'success' )
    })
    $('.room_btn').click(function (e) { 
        notify(txt='...!'  , 'failure' )
    })

});
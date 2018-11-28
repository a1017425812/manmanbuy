$(function(){
    $.ajax({
        url:'http://localhost:9090/api/getsitenav',
        success:function(result){
            console.log(result)
            var html = template('brandTpl',result);
            $('.mui-scroll').html(html);

            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        }
    });



    // $('.box').on('tap','a',function(){

    //     console.log($(this).data('navHref'));
    // });
})
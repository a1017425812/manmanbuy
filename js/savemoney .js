$(function () {
    var page = 1;
    var conuntPage;
    // var totalCount ;
    // var pagesize ;
    sendajax();

    function sendajax() {
        $.ajax({
            url: "http://localhost:9090/api/getmoneyctrl",
            data: {
                pageid: page
            },
            success: function (data) {

                console.log(data);
                var html = template('saveMoneytpl', data);
                $('#main .saveMoney').html(html);
                // conuntPage = Math.ceil(data.totalCount / data.pagesize);
                // console.log(conuntPage);
                // aConuntpage = [];
                // for (var i = 1; i <= conuntPage; i++) {
                //     aConuntpage.push(i)
                    
                // }
                // console.log(aConuntpage);
                
                
                // data.conuntPage =aConuntpage;
                // console.log(data);

                
                // var html =template('pagetpl',data);
                // $('#page').html(html);

            }
        })
    }

    $.ajax({
        url: "http://localhost:9090/api/getmoneyctrl",
        data: {
            pageid: page
        },
        success: function (data) {

            // console.log(data);
            // var html = template('saveMoneytpl', data);
            // $('#main .saveMoney').html(html);
            conuntPage = Math.ceil(data.totalCount / data.pagesize);
            console.log(conuntPage);
            aConuntpage = [];
            for (var i = 1; i <= conuntPage; i++) {
                aConuntpage.push(i)
                
            }
            console.log(aConuntpage);
            
            
            data.conuntPage =aConuntpage;
            console.log(data);

            
            var html =template('pagetpl',data);
            $('#page').html(html);

        }
    })
    
    

    // 给按钮加点击事件
    // 下一页 page++  sendajax();
    // 上一页 page--  sendajax();
    // 每一页的按钮点击事件,获取123456,然后page=这个值,sendajax();

    mui.init({
        swipeBack: true //启用右滑关闭功能
    });
    (function ($) {
        $('.mui-pagination').on('tap', 'a', function () {
            var li = this.parentNode;
            var classList = li.classList;
            if (!classList.contains('mui-active') && !classList.contains('mui-disabled')) {
                var active = li.parentNode.querySelector('.mui-active');
                if (classList.contains('mui-previous')) { //previous
                    if (active) {
                        var previous = active.previousElementSibling;
                        console.log('previous', previous);
                        if (previous && !previous.classList.contains('mui-previous')) {
                            $.trigger(previous.querySelector('a'), 'tap');
                        } else {
                            classList.add('mui-disabled');
                        }
                    }
                } else if (classList.contains('mui-next')) { //next
                    if (active) {
                        var next = active.nextElementSibling;
                        if (next && !next.classList.contains('mui-next')) {
                            $.trigger(next.querySelector('a'), 'tap');
                        } else {
                            classList.add('mui-disabled');
                        }
                    }
                } else { //page
                    active.classList.remove('mui-active');
                    classList.add('mui-active');
                    var page = parseInt(this.innerText);
                    var previousPageElement = li.parentNode.querySelector('.mui-previous');
                    var nextPageElement = li.parentNode.querySelector('.mui-next');
                    previousPageElement.classList.remove('mui-disabled');
                    nextPageElement.classList.remove('mui-disabled');
                    if (page <= 1) {
                        previousPageElement.classList.add('mui-disabled');
                    } else if (page >= 14) {
                        nextPageElement.classList.add('mui-disabled');
                    }
                }
            }
        });
    })(mui);
    // 上一页
    $('.previousPage').on('tap', function () {
        page--;
        sendajax();

    })
    // 下一页
    $('.nextPage').on('tap', function () {
        page++;
        sendajax();
    })
    $("#page").on("tap", "ul .pageone ", function () {
        console.log($(this));
        
        $(this).addClass("mui-active").siblings("li").removeClass("mui-active");
        var oNum = $(this).data("num");
        console.log(oNum);
        page = oNum;
        console.log(page);
        
        sendajax(page);
        
        
    })
    //   conuntPage=Math.ceil(totalCount/pagesize);
    //   console.log(conuntPage);
   

})
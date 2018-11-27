$(function () {

    //渲染商品界面
    $.ajax({
        url: 'http://localhost:9090/api/getcategorytitle',
        success: function (data) {

            var html = template('productListTpl', data);

            $('.productList').html(html);


        }
    })

    // 点击发送id
    $('.productList').on('tap', '.category a', function () {

        var id = $(this).data('id');
        // console.log(id);
        querySecondCategory(id);
    });

    $('.productist').on('tap', 'a',function() {
        console.log(111)
        // location = 'productlist.html?search='+search;
    });
})

// 用id渲染界面
function querySecondCategory(id) {
    $.ajax({
        url: 'http://localhost:9090/api/getcategory',
        data: {titleid: id},
        success: function (data) {
            var html = template('categoryTableTpl', data);
            $('.categoryTable').html(html);
        }
    });
}









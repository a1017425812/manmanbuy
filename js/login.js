/**
 * Created by hujiaohui on 2018/11/27.
 */
$(function(){
    $('.user input').on('tap',function () {
        $('.user label').css({
            'top':0,
        })
        $('.user label').addClass('active');
        $('.user input').addClass('border borderr');
        $('.pwd label').removeClass('active');
        $('.pwd input').removeClass('border borderr');
    });
    $('.pwd input').on('tap',function () {
        $('.pwd label').css({
            'top':0,
        });
        $('.pwd label').addClass('active');
        $('.pwd input').addClass('border borderr');
        $('.user label').removeClass('active');
        $('.user input').removeClass('border borderr');
    })

    $(".login").on("tap",function() {
        var name = $(".username").val();//用户名
        var password = $(".password").val();//密码
        console.log(name);
        
        //判断用户输入的内容不能为空
        if(!name.trim()){
            alert("请输入用户名");
            return false;
        }

        if(!password.trim()){
            alert('请输入密码')
            return false;
        }
        
        var username = JSON.parse(localStorage.getItem('history'));
        console.log(username);
        for(var i=0;i<username.length;i++){
            for(var key in username[i]){
                if(username[i].name==name){
                   if(username[i].password==password){
                       alert("登入成功");
                       location = "index.html";
                       return false;
                   }else{
                       alert("密码错误")
                       return false;
                   }
                }else{
                    alert("用户不存在");
                    return false;
               }
            }
        }
   })

})
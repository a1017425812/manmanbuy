/**
 * Created by hujiaohui on 2018/11/27.
 */
$(function(){
    //点击铵钮是获验证码
    var Num;
    $("#seccode").on("tap", function () {
        alert("获验证码")
        function RndNum(n) {
            var rnd = "";
            for (var i = 0; i <= n; i++)
                rnd += Math.floor(Math.random() * 10);
            return rnd;
        }

        Num = RndNum(5);
        //判断输入的验证码是否正确
        $(".phone").blur(function () {
            if ($(".phone").val() != Num) {
                alert("请入的验证不证码,请重新输入");
                return false;
            }
        })
        console.log(Num);
    });
    // 点击注册
    $(".register").on('tap',function(){
        //判判表格的内容是否为空
        mui(".mui-input-group input").each(function () {
            //若当前input为空，则alert提醒
            if (!this.value || this.value.trim() == "") {
                var label = this.previousElementSibling;
                mui.alert(label.innerText + "不允许为空");
                //check = false;
                return false;
            }
        });
        //判断两次密码是否正确
        var password = $(".user-password").val();
        var seccodePassword = $(".password").val();
        console.log(password + seccodePassword);
        if (password != seccodePassword) {
            alert("两次输入的密码不一至，请重新输入");
            return false;
        }
        //判断机手号码是否正确
        var phone = document.getElementById('phone').value;
        if (!(/^1[34578]\d{9}$/.test(phone))) {
            alert("手机号码有误，请重填");
            return false;
        }
        //判断邮箱是否正确
        var phone = document.getElementById('email').value;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!(filter.test(phone))) {
            alert("邮箱有误，请重填");
            return false;
        }

        //判断用户是否存在
        var name = $(".user-name").val();
        var nameArr;
        var obj = {};
        obj.name = name;
        obj.password = password;
        var res = localStorage.getItem('history');
        if (res) {
            nameArr = JSON.parse(res);
            //console.log(nameArr);
        } else {
            nameArr = []
        }
        if (res) {
            for (var i = 0; i < nameArr.length; i++) {
                for (var key in nameArr[i]) {
                    if (name == nameArr[i].name) {
                        alert('用户已经存在');
                        return false;
                    }
                }
            }
        }
        nameArr.push(obj);
        var json = JSON.stringify(nameArr);
        localStorage.setItem("history", json);
       location = "login.html";
    })
})




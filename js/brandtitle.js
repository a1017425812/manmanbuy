$(function(){


	mui.init({
		swipeBack:true //启用右滑关闭功能
	});
	window.addEventListener('toggle', function(event) {
		if (event.target.id === 'M_Toggle') {
			var isActive = event.detail.isActive;
			var table = document.querySelector('.mui-table-view');
			var card = document.querySelector('.mui-card');
			if (isActive) {
				card.appendChild(table);
				card.style.display = '';
			} else {
				var content = document.querySelector('.mui-content');
				content.insertBefore(table, card);
				card.style.display = 'none';
			}
		}
	});
	

	mui('.mui-scroll-wrapper').scroll({
		
		scrollY: true, //是否竖向滚动
		scrollX: false, //是否横向滚动
		startX: 0, //初始化时滚动至x
		startY: 0, //初始化时滚动至y
		indicators: true, //是否显示滚动条
		deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
		bounce: true //是否启用回弹
	});
        
	var dianshi = document.getElementById('dianshi');
	var kongtiao = document.getElementById('kongtiao');
	var yingyin = document.getElementById('yingyin');
	var bingxiang = document.getElementById('bingxiang');
	var xiangji = document.getElementById('xiangji');
	var shouji = document.getElementById('shouji');
	var chuwei = document.getElementById('chuwei');
    $.ajax({
        url:'http://localhost:9090/api/getbrandtitle',
        success:function(data){
			var result = data.result;
			console.log(result);
			for( var i = 0 ; i<result.length; i++){

				if(result[i].brandTitle.indexOf('电视') != -1){
					dianshi.innerHTML+='<li class="mui-table-view-cell"><a class="mui-navigate-right" href="#" data-brandtitleid="'+ result[i].brandTitleId +'">'+ result[i].brandTitle +'</a></li>';
				}
				else if(result[i].brandTitle.indexOf('空调') != -1){
					kongtiao.innerHTML+='<li class="mui-table-view-cell"><a class="mui-navigate-right" href="#" data-brandtitleid="'+ result[i].brandTitleId +'">'+ result[i].brandTitle +'</a></li>';
				}
				else if(result[i].brandTitle.indexOf('影') != -1 || result[i].brandTitle.indexOf('播放器') != -1 ){
					yingyin.innerHTML+='<li class="mui-table-view-cell"><a class="mui-navigate-right" href="#" data-brandtitleid="'+ result[i].brandTitleId +'">'+ result[i].brandTitle +'</a></li>';
				}
				else if(result[i].brandTitle.indexOf('冰箱') != -1){
					bingxiang.innerHTML+='<li class="mui-table-view-cell"><a class="mui-navigate-right" href="#" data-brandtitleid="'+ result[i].brandTitleId +'">'+ result[i].brandTitle +'</a></li>';
				}
				else if(result[i].brandTitle.indexOf('洗衣机') != -1||result[i].brandTitle.indexOf('热水器') != -1){
					chuwei.innerHTML+='<li class="mui-table-view-cell"><a class="mui-navigate-right" href="#" data-brandtitleid="'+ result[i].brandTitleId +'">'+ result[i].brandTitle +'</a></li>';
				}
				else if(result[i].brandTitle.indexOf('手机') != -1){
					shouji.innerHTML+='<li class="mui-table-view-cell"><a class="mui-navigate-right" href="#" data-brandtitleid="'+ result[i].brandTitleId +'">'+ result[i].brandTitle +'</a></li>';
				}
				else if(result[i].brandTitle.indexOf('相机') != -1){
					xiangji.innerHTML+='<li class="mui-table-view-cell"><a class="mui-navigate-right" href="#" data-brandtitleid="'+ result[i].brandTitleId +'">'+ result[i].brandTitle +'</a></li>';
				}
			}
        }

    })


	$('.groud-list').on('tap','.mui-table-view a.mui-navigate-right',function(){
		console.log($(this).data('brandtitleid'));

		var brandtitleid = $(this).data('brandtitleid');

		location = 'brandtopten.html?brandTitleId=' + brandtitleid;
	})
    

})
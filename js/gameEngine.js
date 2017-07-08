window.gameEngin={
	ele:null,
	dijunfeiji:[],//多架飞机
	zhidan:[],//多个子弹
	
	init:function () {
		this.ele=document.getElementById("main_body");
		return this;
	},
	
	start:function () {
		//移出页面子节点;
		this.ele.children[0].remove();
		
		this.jiazai(function () {
		//我的飞机和子弹数量;
         myPlane.init().kaihuo();
         //创建飞机
                var temp1 = this;
		setInterval(function(){	
		new enemy().init().didon();	
		},1000);
		
             
             //控制自己的飞机
              gameEngin.fle();
              
              //调用检测爆炸
              gameEngin.jcbz();
              
              //分数
              gameEngin.fensu();
              
           });	
           
	},
	
	//加载
	jiazai:function (fn) {
		//创建logo
		var logo = document.createElement("div");
		this.ele.appendChild(logo);
		logo.className="logo";
		
		//创建加载条
		var loading = document.createElement("div");
		this.ele.appendChild(loading);
		loading.className="loading";
		
		
		var n = 0;
		var timer = setInterval(function(){
			
			loading.style.backgroundImage="url(images/loading"+((n%3)+1)+".png)";
			if(n == 3){
				clearInterval(timer);
				
				gameEngin.ele.innerText="";
				if(fn){
					fn();
				}               
			}
			n++;
		},100)
		
		
	},
	//控制飞机
	fle:function(){
		myPlane.ele.onmousedown = function(evt) {
        	var e = evt||window.event;
        	var x = e.offsetX;
        	
        	gameEngin.ele.onmousemove = function(evt) {
       			var e = evt||window.event;
       			myPlane.ele.style.left=e.clientX-gameEngin.ele.offsetLeft-x+"px"
       			
       			if (myPlane.ele.offsetLeft<=0) {
         			myPlane.ele.style.left="0px"
         		}
         		var num1 = gameEngin.ele.offsetWidth-myPlane.ele.offsetWidth
         		if (myPlane.ele.offsetLeft>=num1) {
         			myPlane.ele.style.left=num1+"px"
         		}
			}
        	
        	gameEngin.ele.onmouseup = function() {
        		gameEngin.ele.onmousemove =null;
        		gameEngin.ele.onmouseup = null;
			};

		}

	},
	
	//检测
	jcbz:function(){
		
		
		setInterval(function(){
			//当敌军碰到我机
			//console.log(gameEngin.dijunfeiji)
			for (var k in gameEngin.dijunfeiji){
				
				
				var bo = crashTest(gameEngin.dijunfeiji[k].ele,myPlane.ele)
				
				if (bo) {
					gameEngin.dijunfeiji[k].dieImgbo();
					
                  	 myPlane.myboom();
                    
                     return;
				}
			}
			
			//当敌军碰到子弹；
			for (var k in gameEngin.dijunfeiji){
				
				for (var b in gameEngin.zhidan) {
					
				var bo = crashTest(gameEngin.dijunfeiji[k].ele,gameEngin.zhidan[b].ele)
				
				if (bo) {
					gameEngin.dijunfeiji[k].dieImgbo();

                    gameEngin.zhidan[b].feiImgbo();
                    
                     return;
				}
				}
			}
		},100)
		
	},
	
	//分数；
	fensu:function(){
		
		var fen = document.createElement("div");
		this.ele.appendChild(fen);
		fen.className="score";
		
//		this.fen.style.left = gameEngin.ele.offsetWidth-this.ele.offsetWidth+"px"
//		this.fen.style.top ="0px" 
		
		var num = 0
		var temp = this
		setInterval(function(){
		for (var k in gameEngin.dijunfeiji){
				
				for (var b in gameEngin.zhidan) {
					
				var bo = crashTest(gameEngin.dijunfeiji[k].ele,gameEngin.zhidan[b].ele)
				
				if (bo) {
					num++
					
						fen.innerText="分数:"+num
                     return;
					
                    
				}
				}
			}
		},100)
	}
}

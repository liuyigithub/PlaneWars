window.myPlane={
	
	ele:null,
	
	init:function(){
		this.ele = document.createElement("div");
		gameEngin.ele.appendChild(this.ele);
		this.ele.className="myplane";
		
		//给飞机定位；
		this.ele.style.bottom = "0px";
		this.ele.style.left = parseInt(gameEngin.ele.offsetWidth/2)-parseInt(this.ele.offsetWidth/2)+"px";
		return this;
	},
	//子弹数量；
	kaihuo:function(){
		setInterval(function(){
		new bullets().init().don()
		},250);
	},
	
	//自己的飞机爆炸
	myboom:function(){
		this.arr = ["images/me_die1.png", "images/me_die2.png", "images/me_die3.png", "images/me_die4.png"];
		
		var temp = this;
		var b = 0;
		this.timer=setInterval(function(){
			
		temp.ele.style.backgroundImage="url("+temp.arr[b]+")"		
		b++
		
		if (b>=temp.arr.length) {
			
				alert("game over");
            	   
                window.location.reload(true);
                temp.ele.remove();
                clearInterval(temp.timer);
		}
		},500);
	
	},
	
}

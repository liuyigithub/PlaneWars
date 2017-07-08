//子弹
function bullets(){
	this.id = parseInt(Math.random() * 1000) + "";
	this.ele=null,
	
	this.init=function(){
		this.ele=document.createElement("div");
		gameEngin.ele.appendChild(this.ele);
		this.ele.className="bullet";
		
		gameEngin.zhidan[this.id] = this;
		
		this.ele.style.left=myPlane.ele.offsetLeft+(myPlane.ele.offsetWidth/2)-(this.ele.offsetWidth/2)+"px";
		this.ele.style.top=myPlane.ele.offsetTop-this.ele.offsetHeight+'px';
		
		 return this;
	},
	//移动
	this.don=function(){
		var temp = this;	
		
		 this.ele.timer = setInterval(function(){
			
			temp.ele.style.top=temp.ele.offsetTop-10+"px";
			
			if (temp.ele.offsetTop<=0) {
				temp.ele.remove();
				clearInterval(temp.ele.timer);
				
				delete gameEngin.zhidan[temp.id]
			}
						
		},20)
	}
	
	//子弹爆炸方法；
	
	this.feiImgbo = function(){
		var arr = ["images/bullet.png", "images/die1.png", "images/die2.png"];
		var temp = this;
		var e = 0;
		this.timer = setInterval(function(){
			temp.ele.style.backgroundImage="url("+arr[e]+")"
			e++
			if (e>=arr.length) {
				
				clearInterval(temp.timer);
				
				delete gameEngin.zhidan[temp.id];
				
				temp.ele.remove();
			}
						
		},50)
	}
}

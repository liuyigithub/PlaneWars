
function enemy(){
	this.id = parseInt(Math.random() * 10000) + "";
	this.ele=null
	this.hp = 1;
	this.dieImg = ["images/plane1_die1.png", "images/plane1_die2.png", "images/plane1_die3.png"];
	this.init=function(){
		this.ele=document.createElement("div");
		this.ele.className="enemy-small";
		gameEngin.ele.appendChild(this.ele);
		
		gameEngin.dijunfeiji[this.id] = this;
		
		var x = parseInt(Math.random()*(gameEngin.ele.offsetWidth-this.ele.offsetWidth))
		
		this.ele.style.left=x+"px"
		this.ele.style.top = "0px"
		
		return this;
	}
	//敌军飞机动
	this.didon = function(){
		var temp = this;	
		
		 this.ele.timer = setInterval(function(){
			
			temp.ele.style.top=temp.ele.offsetTop+3+"px";
			
			var num2 = gameEngin.ele.offsetHeight;
			
			if (temp.ele.offsetTop>num2) {
				
				temp.ele.remove();
				
				clearInterval(temp.ele.timer);
				
				delete gameEngin.dijunfeiji[temp.id];
			}
						
		},10)
	}
	
	this.diaxie = function(){
		this.hp--
		if(this.hp==0){
			this.dieImgbo();//调用爆炸效果的函数
		}
	}
	
	//敌方飞机爆炸
	this.dieImgbo = function(){
		var temp = this;
		var a = 0;
		this.timer = setInterval(function(){
			temp.ele.style.backgroundImage="url("+temp.dieImg[a]+")"
			a++
			if (a>=temp.dieImg.length) {
				
				clearInterval(temp.timer);
				
				delete gameEngin.dijunfeiji[temp.id];
				
				temp.ele.remove();
			}
						
		},50)
	}
}





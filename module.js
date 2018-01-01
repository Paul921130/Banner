(function($) {
'use strict';

	var ModuleName = 'banner';

	var Module = function ( ele, options ) {
		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
		this.satePoint =['opened','closing','closed','opening'];
					//opened:0,closing:1,closed:2,opening:3
		this.sate = 0 ;//opened
		this.$btn =$('<div class="btn" id="Btnch"></div>');
		this.transitionEndEvent = function (transitions){
			var el = document.createElement("fakeelement");
			for (var t in transitions){
				if (el.style[t] !== undefined){
					return transitions[t];
				}
			}
		}({
			"transition": "transitionend",
			"OTransition": "oTransitionEnd",
			"MozTransition": "transitionend",
			"WebkitTransition": "webkitTransitionEnd"
		});
		this.storage;
		this.timer
	};
	
	//下面是DEFAULTS物件 
	Module.DEFAULTS = {
			openAtStart: true,
			autoToggle: false,
			countTime: 3000,
			button: {
				closeText: '收合', 
				openText: '展開', 
				class: 'btn' 
			},
				
			class: {
				opened: 'opened',
				closing: 'closing', 
				closed: 'closed', 
				opening: 'opening' ,
			},
				
			transition: true,

			whenTransition: function() {
			console.log('whenTransition');
		}

		};
	

	

		Module.prototype.init = function () {
		
		this.$ele.append(this.$btn);
		//帶入btn的html

		var x = this.sate;
		if ( this.option.openAtStart ===false ) {
			this.sate = 2;//banner關閉時
			this.$btn.text( this.option.button.openText );//按鈕文字變化
			 // this.addTransition();
		}else{
			this.sate = 0;//banner開啟時
			this.$btn.text( this.option.button.closeText );//按鈕文字變化
			// this.addTransition();
		}
		
		if ( this.option.transition ===true ) {
			this.addTransition();
		}//判斷是否要有transition效果

		this.$ele.addClass(this.nowSate(this.sate));
		// 將banner的狀態輸入進去
		console.log(x); //現在是opened:0
		console.log('Finally!!');

		if ( this.option.autoToggle === 'open' && this.sate === 2 ) {
			this.timer = setTimeout( this.toggle.bind(this), this.option.countTime );
		} else if ( this.option.autoToggle === 'close' &&  this.sate === 0 ) {
			this.timer = setTimeout( this.toggle.bind(this), this.option.countTime );
		}
	};
	//首次執行的function!!!
	//第一次執行的呼叫function



	Module.prototype.nowSate = function(sate){
		return this.option.class[this.satePoint[sate]];
	}//定義sate也就是狀態的數字(索引)所要添加的class,[sate]是索引值,
		//[this.satePoint[sate]]是字串
		// var obj ={
		// 	x:'123';
		// }
		// var propName= 'x';
		// obj [propName] 

	Module.prototype.addTransition = function() {
		if ( ! this.$ele.hasClass('transition') ) {
			this.$ele.addClass('transition');
		};
	};//判斷原ele是否有transition,如果沒有則加。

	Module.prototype.toggle = function () {
		 
		 this.clearTimer();

		 this.addTransition();

		if ( this.sate === 2 ) {
			this.open();
		} else if ( this.sate === 0 ) {	
			this.close();
		};	
		this.timer = setInterval(this.option.whenTransition, 25);
		// if(this.sate === 0 || this.sate === 1 ){
		// 	document.getElementById('Btnch').innerHTML = '收合';
		// 	//JS修改HTML中間文字
		// }else{
		// 	document.getElementById('Btnch').innerHTML = '展開';
		// 	//JS修改HTML中間文字
		// };	
	};

	Module.prototype.transitionEnd = function () {
		if ( this.sate === 1 ) {
			this.$ele.removeClass( this.nowSate(this.sate) ).addClass( this.nowSate(this.nextStatus()) );
		} else if ( this.sate === 3 ) {
			this.$ele.removeClass( this.nowSate(this.sate) ).addClass( this.nowSate(this.nextStatus()) );
			}
		 this.clearTimer();
	};

	//測試中


	// Module.prototype.open = function () {
	// 	this.$ele.removeClass( this.nowSate(this.sate) ).addClass( this.nowSate(this.downSate()) );
 //  		this.$ele.removeClass( this.nowSate(this.sate) ).addClass( this.nowSate(this.downSate()) );
	// 	return this.sate;
	// };//如何進行開的動作closed-opening-opened[2-3-0]


	// Module.prototype.close = function () {
	// 	this.$ele.removeClass( this.nowSate(this.sate) ).addClass( this.nowSate(this.goSate()) );
	// 	this.$ele.removeClass( this.nowSate(this.sate) ).addClass( this.nowSate(this.goSate()) );
	// 	return this.sate;			
	// };//如何進行關的動作opened-closing-closed[0-1-2]
	

	//測試中
	Module.prototype.nextStatus = function () {
		this.sate++;
		if ( this.sate > this.satePoint.length-1 ) {
			this.sate = 0;
		}
		return this.sate;
	};

	Module.prototype.open = function () {
		this.$ele.removeClass( this.nowSate(this.sate) ).addClass( this.nowSate(this.nextStatus()) );
		this.$btn.text(this.option.button.closeText);
	// this.$ele.removeClass( this.nowSate(this.sate) ).addClass( this.nowSate(this.nextStatus()) );
	};

	Module.prototype.close = function () {
		this.$ele.removeClass( this.nowSate(this.sate) ).addClass( this.nowSate(this.nextStatus()) );
		this.$btn.text(this.option.button.openText);
	// this.$ele.removeClass( this.nowSate(this.sate) ).addClass( this.nowSate(this.nextStatus()) );
	};

	// Module.prototype.goSate = function () {
	// 	if(this.sate > this.satePoint.lenght-1){
	// 		this.sate = 0;
	// 	}
	// 	this.sate ++;
	// 	return this.sate;//停止執行
	// };
	// Module.prototype.downSate = function () {
	// 	if(this.sate < this.satePoint.lenght-1){
	// 		this.sate = 2;
	// 	}
	// 	this.sate --;
	// 	return this.sate;//停止執行
	// };
	
	Module.prototype.clearTimer = function() {
		clearInterval(this.timer);
		clearTimeout(this.timer);
	};


	$.fn[ModuleName] = function ( method, options ) {
		return this.each(function(){
			var $this = $(this);
			var module = $this.data( ModuleName );
			var opts = null;
			if ( !!module ) {
				if ( typeof method === 'string' &&  typeof options === 'undefined' ) {
					module[method]();
				} else if ( typeof method === 'string' && typeof options === 'object' || typeof options === 'string' ) {
					module[method](options);
				} else {
					console.log('unsupported options!');
				}
			} else {
				opts = $.extend( {}, Module.DEFAULTS, ( typeof method === 'object' && method ), ( typeof options === 'object' && options ) );
				module = new Module(this, opts);
				$this.data( ModuleName, module );

				module.init();
				
				module.$btn.on('click', function() {
					module.toggle(0);
				});

				module.$ele.on(module.transitionEndEvent, function(e, ignore) {
					if (ignore) {
						console.log('trigger transitionend and dont run anything');
					} else {
						module.transitionEnd();
					}
			});
		}
		
		});
	};

})(jQuery);
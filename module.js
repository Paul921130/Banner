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
		this.$btn =$('<div class="btn" id="Btnch"></div>')
	};
	
	//下面是DEFAULTS物件
	Module.DEFAULTS = {
			openAtStart: true,
			autoToggle: true,
			
			button: {
			closeText: '收合', // [string]
			openText: '展開', // [string]
			class: 'btn' // [string]
			},
			
			class: {
			opened: 'opened',// [string]
			closing: 'closing', // [string]
			closed: 'closed', // [string]
			opening: 'opening' // [string]
			},
			
			transition: true,

			whenTransition: function() {
				console.log('whenTransition');
			}
		};
	

	// Module.prototype.nowSate =function(sate){
	// 	console.log(222);
	// 	return this.option.class[this.satePoint[sate]];
	// 	console.log(this.option.class[this.satePoint[sate]]);
	// };

	

	Module.prototype.init = function () {
		this.$ele.append(this.$btn);
		this.$ele.addClass(this.nowSate(this.sate));
		//將banner的狀態輸入進去
		
		var x =this.sate;
		
		if(this.sate===0 || this.sate===1 ){
			document.getElementById('Btnch').innerHTML = '收合'
			//JS修改HTML中間文字
		}else{
			document.getElementById('Btnch').innerHTML = '展開'
		}
		console.log(x); //現在是opened:0
		console.log('Finally!!');
	};//首次執行的function!!!!全局function!!!等等要注意!!!!
	//第一次執行的呼叫function



	Module.prototype.nowSate = function(sate){
		return this.option.class[this.satePoint[sate]];
	}//定義sate也就是狀態的數字(索引)所要添加的class



	// Module.prototype.goSate = function () {
	// 	this.sate++;
	// 	if(this.sate >this.satePoint.lenght-1){
	// 		this.sate =0;
	// 	}
	// 	return this.sate;
	// };


	Module.prototype.open = function () {

	}//如何進行開的動作closed-opening-opened[2-3-0]


	Module.prototype.close = function () {

	}//如何進行關的動作opened-closing-closed[0-1-2]
	

	







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
			}
		});
	};

})(jQuery);
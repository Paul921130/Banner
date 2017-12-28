(function($) {
'use strict';

	var ModuleName = 'banner';

	var Module = function ( ele, options ) {
		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
		this.satePoint =['opened','opening','closing','closed'];
					//opened:0,opening:1,closing:2,closed:3
		this.sate =0;//opened
		this.btn =$('<div class="btn" id="Btnch"></div>')
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
			closed: 'closed', // [string]
			closing: 'closing', // [string]
			opened: 'opened', // [string]
			opening: 'opening' // [string]
			},
			
			transition: true,

			whenTransition: function() {
				console.log('whenTransition');
			}
		};
	

	Module.prototype.nowSate =function(sate){
		return this.option.class[this.satePoint[sate]];
	}

	Module.prototype.init = function () {
		
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
			}
		});
	};

})(jQuery);
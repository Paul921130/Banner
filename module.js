(function($) {
'use strict';

	var ModuleName = 'banner';

	var Module = function ( ele, options ) {
		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
		this.satePoint =['opened','opening','closing','closed'];
					//opened:0,opening:1,closing:2,closed:3
	};

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
		
		class: {
			main: 'banner',
			wrap: {
				icon: 'iwrap',
				content: 'ctn',
				close: 'close'
			}
		},
	};

	Module.prototype.init = function () {
		
	};


	Module.prototype.togglebanner = function ( id ) {


	};








	// $.fn[ModuleName] = function ( method, options ) {
	// 	return this.each(function(){
	// 		var $this = $(this);
	// 		var module = $this.data( ModuleName );
	// 		var opts = null;
	// 		if ( !!module ) {
	// 			if ( typeof method === 'string' &&  typeof options === 'undefined' ) {
	// 				module[method]();
	// 			} else if ( typeof method === 'string' && typeof options === 'object' || typeof options === 'string' ) {
	// 				module[method](options);
	// 			} else {
	// 				console.log('unsupported options!');
	// 			}
	// 		} else {
	// 			opts = $.extend( {}, Module.DEFAULTS, ( typeof method === 'object' && method ), ( typeof options === 'object' && options ) );
	// 			module = new Module(this, opts);
	// 			$this.data( ModuleName, module );
	// 			module.init();
	// 		}
	// 	});
	// };

})(jQuery);
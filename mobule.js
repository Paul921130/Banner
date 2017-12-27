(function($) {
'use strict';

	var ModuleName = 'alerts';

	var Module = function ( container, options ) {
		this.$container = $(container);
		this.alerts = [];
		this.options = options;
	};

	Module.DEFAULTS = {
		size: 'md', // xs, sm, md, lg
		html: {
			icon: '',
			content: ''
		},
		class: {
			main: 'alt_lnal',
			wrap: {
				icon: 'iwrap',
				content: 'ctn',
				close: 'close'
			}
		},
		style: {
			main: null,
			wrap: {
				icon: null,
				content: 'color:#ffea00',
				close: null
			}
		}
	};

	Module.prototype.init = function () {
		
	};

	Module.prototype.toggleAlert = function ( id ) {

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
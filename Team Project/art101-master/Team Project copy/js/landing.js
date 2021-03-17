/**
  *Menu Animation:
  *Author: John Choura Jr
  *Created:
  *License: Public Domain
**/

(function() {

				function SVGDDMenu( el, options ) {
					this.el = el;
					this.init();
				}

				SVGDDMenu.prototype.init = function() {
					this.shapeEl = this.el.querySelector( 'div.morph-shape' );

					var s = Snap( this.shapeEl.querySelector( 'svg' ) );
					this.pathEl = s.select( 'path' );
					this.paths = {
						reset : this.pathEl.attr( 'd' ),
						trans : this.shapeEl.getAttribute( 'data-morph-trans' ),
						open : this.shapeEl.getAttribute( 'data-morph-open' )
					};

					this.isOpen = false;

					this.initEvents();
				};

				SVGDDMenu.prototype.initEvents = function() {
					this.el.addEventListener( 'click', this.toggle.bind(this) );

					// For Demo purposes only
					[].slice.call( this.el.querySelectorAll('a') ).forEach( function(el) {
						el.onclick = function() { return true; }
					} );
				};

				SVGDDMenu.prototype.toggle = function() {
					var self = this;

					if( this.isOpen ) {
						classie.remove( self.el, 'menu--open' );

						self.pathEl.stop().animate( { 'path' : this.paths.reset }, 3000, mina.elastic );

					}
					else {
						classie.add( self.el, 'menu--open' );

						this.pathEl.stop().animate( { 'path' : this.paths.trans }, 320, mina.easeinout, function() {
							self.pathEl.stop().animate( { 'path' : self.paths.open }, 2500, mina.elastic );
						} );

					}

					this.isOpen = !this.isOpen;
				};

				new SVGDDMenu( document.getElementById( 'menu' ) );

			})();

(function () {
	Polymer({
		is: 'dynamic-background',
		properties: {
			activeBackground: {
				type: String,
				value: ''
			}
		},
		backgroundsCollection: [],
		windowSize: {
			height: Number,
			width: Number
		},
		ready: function () {
			var nodeList = document.querySelectorAll('background-element'),
				i;
			for(i = 0; i < nodeList.length; i++) {
				this.backgroundsCollection.push(nodeList[i].getAttribute('background'));
			}
			this.activeBackground = this.backgroundsCollection[0];
		},
		attached: function () {
			var that = this,
				getWindowSize = function () {
					that.windowSize.height = $(that.$.background).height();
					that.windowSize.width = $(that.$.background).width();
				};
			getWindowSize();
			$(window).resize(getWindowSize);
		},
		scroller: function(event) {
			var target = $(event.target),
				that = this,
				ratio = Math.round((target.scrollTop() / this.windowSize.height) - 0.3);
			this.activeBackground = this.backgroundsCollection[ratio];
		}
	});
})();
import Ember from 'ember';

export default Ember.Component.extend({
	isPlaying: false,
	my_media: null,
	genMash: null,
	loadCode: null,
	musicUrl: "http://www.midiworld.com/download/4726",
	gifUrl: "http://i1090.photobucket.com/albums/i363/scooterr98/Icons/170422_dancing_banana.gif",
	apiUrl: "https://is.gd/create.php?format=simple&url=",
	ajax : function(getIt) {
		return Em.$.ajax({url: getIt});
	},

	actions: {
		playMus : function (musUrl) {

			this.my_media = new Media(musUrl, 
				 // success callback
		        function () {
		            console.log("playAudio():Audio Success");
		        },
		        // error callback
		        function (err) {
		            console.log("playAudio():Audio Error: " + err);
		            console.log(err);
		        });

		   
			this.my_media.play();
			this.set('isPlaying', true);
		},
		stopMus : function () {
			this.my_media.stop();
			this.my_media.release();
			this.set('isPlaying', false);
		},
		generate : function () {
			var toShort = this.apiUrl.concat(this.gifUrl);
			this.ajax(toShort).done(function(result) {
			    this.set('genMash', result);
			    console.log(result);
			}).fail(function() {
			    // An error occurred
			});
		},
		load : function (loadCode){

		},
	}

});
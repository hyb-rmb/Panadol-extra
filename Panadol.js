(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.baru = function() {
	this.initialize(img.baru);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,25);


(lib.benar = function() {
	this.initialize(img.benar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,72);


(lib.bevel = function() {
	this.initialize(img.bevel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,490,516);


(lib.bgred = function() {
	this.initialize(img.bgred);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.cepat = function() {
	this.initialize(img.cepat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,49);


(lib.footer = function() {
	this.initialize(img.footer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,295,34);


(lib.Image1 = function() {
	this.initialize(img.Image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.Image2 = function() {
	this.initialize(img.Image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.kemasan = function() {
	this.initialize(img.kemasan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,242);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,28);


(lib.op1 = function() {
	this.initialize(img.op1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,42);


(lib.op2 = function() {
	this.initialize(img.op2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,42);


(lib.op3 = function() {
	this.initialize(img.op3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,42);


(lib.overlay = function() {
	this.initialize(img.overlay);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,287);


(lib.overlay2 = function() {
	this.initialize(img.overlay2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.panadol = function() {
	this.initialize(img.panadol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,41);


(lib.question = function() {
	this.initialize(img.question);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,71);


(lib.Respons1 = function() {
	this.initialize(img.Respons1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,273,104);


(lib.shieldbig = function() {
	this.initialize(img.shieldbig);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,316,311);


(lib.shield = function() {
	this.initialize(img.shield);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,62);


(lib.tab1 = function() {
	this.initialize(img.tab1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,54);


(lib.terjangkau = function() {
	this.initialize(img.terjangkau);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,316,50);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tab = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tab1();
	this.instance.setTransform(-43.5,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tab, new cjs.Rectangle(-43.5,-27,87,54), null);


(lib.stageBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.149)").s().p("A6KNcIAA63MA0VAAAIAAa3g");
	this.shape.setTransform(-0.5,162.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stageBtn, new cjs.Rectangle(-168,76.1,335,171.9), null);


(lib.shieldtrx = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shieldbig();
	this.instance.setTransform(-158,-155.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shieldtrx, new cjs.Rectangle(-158,-155.5,316,311), null);


(lib.red = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bgred();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.red, new cjs.Rectangle(-160,-240,320,480), null);


(lib.q = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.question();
	this.instance.setTransform(-140,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q, new cjs.Rectangle(-140,-35.5,280,71), null);


(lib.overlay_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.overlay2();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.overlay_mc, new cjs.Rectangle(-160,-240,320,480), null);


(lib.op3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.op3();
	this.instance.setTransform(-46,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.op3_1, new cjs.Rectangle(-46,-21,92,42), null);


(lib.op2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.op2();
	this.instance.setTransform(-46,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.op2_1, new cjs.Rectangle(-46,-21,92,42), null);


(lib.op1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.op1();
	this.instance.setTransform(-46,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.op1_1, new cjs.Rectangle(-46,-21,92,42), null);


(lib.model2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image2();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.model2, new cjs.Rectangle(-160,-240,320,480), null);


(lib.mcmodel1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image1();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcmodel1, new cjs.Rectangle(-160,-240,320,480), null);


(lib.mckemasan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.kemasan();
	this.instance.setTransform(-102,-121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mckemasan, new cjs.Rectangle(-102,-121,204,242), null);


(lib.mc_respons = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Respons1();
	this.instance.setTransform(-136.5,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_respons, new cjs.Rectangle(-136.5,-52,273,104), null);


(lib.logoend = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.panadol();
	this.instance.setTransform(-98.1,-16.35,0.7975,0.7975);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logoend, new cjs.Rectangle(-98.1,-16.3,196.2,32.7), null);


(lib.harga = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.terjangkau();
	this.instance.setTransform(-158,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.harga, new cjs.Rectangle(-158,-25,316,50), null);


(lib.foooter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.footer();
	this.instance.setTransform(-147.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.foooter, new cjs.Rectangle(-147.5,-17,295,34), null);


(lib.cepat_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cepat();
	this.instance.setTransform(-147,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cepat_1, new cjs.Rectangle(-147,-24.5,294,49), null);


(lib.bevel_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bevel();
	this.instance.setTransform(-245,-258);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bevel_1, new cjs.Rectangle(-245,-258,490,516), null);


(lib.baru_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.baru();
	this.instance.setTransform(-39,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.baru_1, new cjs.Rectangle(-39,-12.5,78,25), null);


(lib.respons1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_94 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(94).call(this.frame_94).wait(1));

	// Layer_1
	this.instance = new lib.mc_respons();
	this.instance.setTransform(0,0,0.4198,0.4198);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).to({alpha:0.8008},7).to({alpha:1},7).to({alpha:0.8008},7).to({alpha:1},7).wait(56));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.5,-52,273,104);


(lib.overlay2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.overlay_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1825,scaleY:1.1825},23).to({scaleX:1,scaleY:1},24).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.2,-283.8,378.4,567.6);


(lib.model1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mcmodel1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.075,scaleY:1.075,x:11.95,y:17.95},34).to({scaleX:1,scaleY:1,x:0,y:0},35).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,344,516);


(lib.kemasan_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mckemasan();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9529,scaleY:0.9529},34).to({scaleX:1,scaleY:1},35).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-121,204,242);


// stage content:
(lib.Panadol = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {timeout:54};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [24,44,144,179];
	// timeline functions:
	this.frame_24 = function() {
		this.op1.addEventListener("click", () => {
			this.respons.gotoAndPlay(1);
		});
		this.op3.addEventListener("click", () => {
			this.respons.gotoAndPlay(1);
		});
		
		this.op2.addEventListener("click", () => {
			this.gotoAndPlay("timeout");
		});
		
		// Set waktu awal
		let countdown = 10;
		
		// Set style teks timer
		this.timer.font = "bold 18pt Gotham"; // Gotham Bold
		this.timer.color = "#A31D23";
		
		// Tampilkan angka awal
		this.timer.text = countdown;
		
		// Hapus timer lama jika ada
		if (this.countdownInterval) {
		    clearInterval(this.countdownInterval);
		}
		
		// Fungsi untuk stop timer
		const stopCountdown = () => {
		    clearInterval(this.countdownInterval);
		};
		
		// Event listener untuk tombol op2
		this.op2.addEventListener("click", () => {
		    stopCountdown();
		    // Aksi lain jika tombol op2 diklik sebelum habis
		    console.log("Tombol op2 diklik, timer dihentikan.");
		});
		
		// Jalankan hitungan mundur
		this.countdownInterval = setInterval(() => {
		    countdown--;
		    this.timer.text = countdown; // update text
		
		    if (countdown <= 0) {
		        clearInterval(this.countdownInterval); // stop interval
		        this.gotoAndPlay("timeout"); // pindah ke frame label timeout
		    }
		}, 1000);
	}
	this.frame_44 = function() {
		this.stop();
	}
	this.frame_144 = function() {
		this.lp.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.panadol.com/id-id/", "_blank");
		    }, 100);
		}.bind(this));
		
		this.lp.alpha = 0.05;
	}
	this.frame_179 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(20).call(this.frame_44).wait(100).call(this.frame_144).wait(35).call(this.frame_179).wait(1));

	// Layer_14
	this.instance = new lib.benar();
	this.instance.setTransform(36,241);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({_off:true},27).wait(84));

	// Layer_13
	this.instance_1 = new lib.tab();
	this.instance_1.setTransform(162.5,347,1,1,-31.4791);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({rotation:0,x:160.5,y:173,alpha:1},10).to({_off:true},27).wait(84));

	// Layer_11
	this.instance_2 = new lib.bevel_1();
	this.instance_2.setTransform(-352.25,232.35,1.0822,1.0822,0,0,0,-0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({scaleX:1.069,scaleY:1.069,x:618.95,y:233.95},9).wait(68).to({scaleX:1.0822,scaleY:1.0822,x:-352.25,y:232.35},0).to({scaleX:1.069,scaleY:1.069,x:618.95,y:233.95},9).to({_off:true},1).wait(39));

	// Layer_4
	this.instance_3 = new lib.Logo();
	this.instance_3.setTransform(15,14,0.8178,0.8178);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},136).wait(44));

	// Layer_23
	this.lp = new lib.stageBtn();
	this.lp.name = "lp";
	this.lp.setTransform(157.85,251.25,0.9554,2.7918,0,0,0,-2.7,166);
	this.lp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lp).wait(144).to({_off:false},0).wait(36));

	// Layer_18
	this.instance_4 = new lib.baru_1();
	this.instance_4.setTransform(358.35,12.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(136).to({_off:false},0).to({x:281},6).wait(38));

	// Layer_22
	this.instance_5 = new lib.foooter();
	this.instance_5.setTransform(160.5,455);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(144).to({_off:false},0).wait(36));

	// Layer_21
	this.instance_6 = new lib.cepat_1();
	this.instance_6.setTransform(-158.45,393.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(144).to({_off:false},0).to({x:160},9).wait(27));

	// Layer_20
	this.instance_7 = new lib.harga();
	this.instance_7.setTransform(484.4,334);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(144).to({_off:false},0).to({x:164},9).wait(27));

	// Layer_19
	this.instance_8 = new lib.logoend();
	this.instance_8.setTransform(160.1,298.15);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(144).to({_off:false},0).to({y:282.35,alpha:1},9).wait(27));

	// Layer_17
	this.instance_9 = new lib.kemasan_1();
	this.instance_9.setTransform(160.05,152,0.5745,0.5745,0,0,0,0.1,0);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(142).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:166.6,y:140.7,alpha:1},7).wait(31));

	// Layer_16
	this.instance_10 = new lib.shieldtrx();
	this.instance_10.setTransform(-191.7,89.6,1.1799,1.1799,0,0,0,-0.1,0.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(136).to({_off:false},0).to({x:117.5,y:98.45,alpha:1},8).wait(36));

	// Layer_12
	this.instance_11 = new lib.red();
	this.instance_11.setTransform(-27,240);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(54).to({_off:false},0).to({x:160,alpha:1},7).wait(35).to({alpha:0},5).wait(30).to({x:-27},0).to({x:160,alpha:1},7).wait(42));

	// Layer_10
	this.respons = new lib.respons1();
	this.respons.name = "respons";
	this.respons.setTransform(160.5,171);
	this.respons._off = true;

	this.timeline.addTween(cjs.Tween.get(this.respons).wait(24).to({_off:false},0).to({_off:true},35).wait(121));

	// Layer_5
	this.instance_12 = new lib.q();
	this.instance_12.setTransform(160,368.55);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({_off:false},0).to({y:357.5,alpha:1},10).to({_off:true},35).wait(121));

	// Layer_6
	this.timer = new cjs.Text("10", "18px 'Gotham Bold'", "#A31D23");
	this.timer.name = "timer";
	this.timer.textAlign = "center";
	this.timer.lineHeight = 24;
	this.timer.lineWidth = 28;
	this.timer.parent = this;
	this.timer.setTransform(160,289.2);

	this.instance_13 = new lib.shield();
	this.instance_13.setTransform(133,282);

	this.op3 = new lib.op3_1();
	this.op3.name = "op3";
	this.op3.setTransform(254,426);

	this.op2 = new lib.op2_1();
	this.op2.name = "op2";
	this.op2.setTransform(160,426);

	this.op1 = new lib.op1_1();
	this.op1.name = "op1";
	this.op1.setTransform(66,426);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.op1},{t:this.op2},{t:this.op3},{t:this.instance_13},{t:this.timer}]},24).to({state:[]},35).to({state:[]},43).wait(78));

	// Layer_3
	this.instance_14 = new lib.overlay2_1();
	this.instance_14.setTransform(160,240,1.2554,1.2554);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleX:1,scaleY:1},9).wait(92).to({scaleX:1.4981,scaleY:1.4981,alpha:0},10).to({_off:true},1).wait(68));

	// Layer_2
	this.instance_15 = new lib.overlay();
	this.instance_15.setTransform(0,193);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(9).to({_off:false},0).to({_off:true},87).wait(84));

	// Layer_15
	this.instance_16 = new lib.model2();
	this.instance_16.setTransform(160,240);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(101).to({_off:false},0).to({scaleX:1.1387,scaleY:1.1387,x:164.6,y:273.25,alpha:1},10).to({_off:true},26).wait(43));

	// Layer_1
	this.instance_17 = new lib.model1();
	this.instance_17.setTransform(195.55,293.15,1.2216,1.2216,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({regX:0,regY:0,scaleX:1,scaleY:1,x:160,y:240},14).wait(87).to({scaleX:1.0387,scaleY:1.0387,x:166.15,y:249.2},10).to({_off:true},1).wait(68));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-457.3,120.5,1338.3,479.1);
// library properties:
lib.properties = {
	id: '89A0D2EBF3D40840B5E43F14BDB73BC3',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/baru.png", id:"baru"},
		{src:"images/benar.png", id:"benar"},
		{src:"images/bevel.png", id:"bevel"},
		{src:"images/bgred.png", id:"bgred"},
		{src:"images/cepat.png", id:"cepat"},
		{src:"images/footer.png", id:"footer"},
		{src:"images/Image1.png", id:"Image1"},
		{src:"images/Image2.png", id:"Image2"},
		{src:"images/kemasan.png", id:"kemasan"},
		{src:"images/Logo.png", id:"Logo"},
		{src:"images/op1.png", id:"op1"},
		{src:"images/op2.png", id:"op2"},
		{src:"images/op3.png", id:"op3"},
		{src:"images/overlay.png", id:"overlay"},
		{src:"images/overlay2.png", id:"overlay2"},
		{src:"images/panadol.png", id:"panadol"},
		{src:"images/question.png", id:"question"},
		{src:"images/Respons1.png", id:"Respons1"},
		{src:"images/shieldbig.png", id:"shieldbig"},
		{src:"images/shield.png", id:"shield"},
		{src:"images/tab1.png", id:"tab1"},
		{src:"images/terjangkau.png", id:"terjangkau"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['89A0D2EBF3D40840B5E43F14BDB73BC3'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;

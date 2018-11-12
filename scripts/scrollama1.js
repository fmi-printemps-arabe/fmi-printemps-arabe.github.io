// using d3 for convenience
var container1 = d3.select('#scroll1');
var graphic1 = container1.select('.scroll1__graphic1');
var chart1 = graphic1.select('.chart1');
var text1 = container1.select('.scroll1__text1');
var step1 = text1.selectAll('.step1');
var containerfirst1 = chart1.select('#datastepfirst')
var containersecond1 = chart1.select('#datastepsecond')
var textapparait= containerfirst1.select('#containerfirst').select('.content')

/*
var wavesurfer = WaveSurfer.create({
    // Use the id or class-name of the element you created, as a selector
    container: '#waveform1',
  // The color can be either a simple CSS color or a Canvas gradient
    waveColor: 'grey',
    progressColor: 'hsla(200, 100%, 30%, 0.5)',
  cursorColor: '#fff',
    // This parameter makes the waveform look like SoundCloud's player
    // barWidth: 3,
    // hideScrollbar: false
});

wavesurfer.load(src="audio/protestsound.mp3");
// wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');

wavesurfer.on('load', wavesurfer.play.bind(wavesurfer))
*/

// initialize the scrollama
var scroller1 = scrollama();

// generic window resize listener event
function handleResize1() {
// 1. update height of step elements
    var stepHeight = Math.floor(window.innerHeight * 0.99);
	//step0.style('height', stepHeight + 'px');
	step1.style('height', '100%');
	containerfirst1.style('height', stepHeight + 'px')
	containersecond1.style('height', stepHeight + 'px')

// 2. update width/height of graphic element
	var bodyWidth = d3.select('body').node().offsetWidth;
	var textWidth = text.node().offsetWidth;

	var graphicWidth = bodyWidth - textWidth;

	graphic1
		//.style('width', graphicWidth + 'px')
		.style('height', window.innerHeight + 'px');

    var chartMargin = 32;
	var chartWidth = graphic1.node().offsetWidth - chartMargin;

	chart1
		//.style('z-index',2)
		//.style('margin-top','12%')
		//.style('width', chartWidth + 'px')
		//.style('height', Math.floor(window.innerHeight / 2) + 'px');

// 3. tell scrollama to update new element dimensions
	scroller1.resize();
}

// scrollama event handlers
function handleStepEnter1(response) {
	// response = { element, direction, index }

	// Mettre à gauche

	if (Number(response.index)=="6") {
		text0
			.style('padding','0 0')
			.style('margin','0 7rem')
			.style('width','33%')
	}

	if (Number(response.index)=="5") {
		text0
			.style('-moz-transform','translateY(-22%)')
			.style('-webkit-transform','translateY(-22%)')
			.style('margin','0 auto')
			.style('width','45%')
	}

	// add color to current step only
	step0.classed('is-active', function (d, i) {
		return i === response.index;
	})

	// update graphic based on step

	// 2 modèles
	// Modèle 1 : 
		//document.getElementById('textepourson').innerHTML = ""
	// Modèle 2 : 
		//document.getElementById(response.index+1).classList.remove('hiddenimage');
		//document.getElementById(response.index).classList.add('hiddenimage');
		
	if (response.index=='0') {
		document.getElementById("datastepfirst").classList.remove('hiddenstuff')
		document.getElementById("datastepzero").classList.remove('hiddenstuff')
	}
	
	if (response.index=='1') {
		document.getElementById("datastepfirst").classList.add('hiddenstuff')
		document.getElementById("datastepzero").classList.add('hiddenstuff')
		document.getElementById("datastepsecond").classList.remove('hiddenstuff')
		//textapparait.style('color','white')
		//document.getElementById("datastepsecond").classList.add('hiddenstuff')
	}	
	
	if (response.index=='5') {
		if (wavesurfer.isPlaying()==true) {
			document.getElementById("stop").click()
		}
	}
	
}

function handleContainerEnter1(response) {
	// response = { direction }
}

function handleContainerExit1(response) {
	// response = { direction }	
}

function setupStickyfill1() {
	d3.selectAll('.sticky1').each(function () {
		Stickyfill.add(this);
	});
}

function init1() {
	setupStickyfill1();

	// 1. force a resize on load to ensure proper dimensions are sent to scrollama
	handleResize1();

	// 2. setup the scroller passing options
	// this will also initialize trigger observations
	// 3. bind scrollama event handlers (this can be chained like below)
	scroller1.setup({
		container: '#scroll1',
		graphic: '.scroll1__graphic1',
		text: '.scroll1__text1',
		step: '.scroll1__text1 .step1',
		debug: false,
	})
		.onStepEnter(handleStepEnter1)
		.onContainerEnter(handleContainerEnter1)
		.onContainerExit(handleContainerExit1);

	// setup resize event
	window.addEventListener('resize', handleResize1);
}

// kick things off
init1();
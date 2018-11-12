// using d3 for convenience
var container2 = d3.select('#scroll2');
var graphic2 = container2.select('.scroll2__graphic2');
var chart2 = graphic2.select('.chart2');
var text2 = container2.select('.scroll2__text2');
var step2 = text2.selectAll('.step2');

// initialize the scrollama
var scroller2 = scrollama();

// generic window resize listener event
function handleResize2() {
// 1. update height of step elements
	step2.style('height', '100%');

// 2. update width/height of graphic element
	var bodyWidth = d3.select('body').node().offsetWidth;
	var textWidth = text2.node().offsetWidth;

	var graphicWidth = bodyWidth - textWidth;

	graphic2
		//.style('width', graphicWidth + 'px')
		.style('height', window.innerHeight + 'px');

    var chartMargin = 32;
	var chartWidth = graphic2.node().offsetWidth - chartMargin;

	chart2
		//.style('width', chartWidth + 'px')
		//.style('height', Math.floor(window.innerHeight / 2) + 'px');

	// 3. tell scrollama to update new element dimensions
	scroller2.resize();
}

// scrollama event handlers
function handleStepEnter2(response) {
	// response = { element, direction, index }

	// add color to current step only
	step2.classed('is-active', function (d, i) {
		return i === response.index;
	})

	// update graphic based on step
	
	if (response.index=="0"){
		document.getElementById('main2').innerHTML = '<img src="images/egypte.jpeg" alt="Manifestations Egypte">'	
	}
	if (response.index=="1"){
		document.getElementById('main2').innerHTML = '<img src="images/maroc.jpeg" alt="Manifestations Maroc">'	
	}

	if (response.index=="2"){
		document.getElementById('main2').innerHTML = '<iframe width="560" height="315" src="//embedftv-a.akamaihd.net/456c5593d2bf1e10ee769f1463eb80e1" frameborder="0" scrolling="no" allowfullscreen></iframe>' 
		/*'<img src="images/tunisie.jpeg" alt="Manifestations Jordanie">'	*/
	}

	if (response.index=="3"){
		document.getElementById('main2').innerHTML = '<img src="images/noir.jpeg" alt="Noir">'	
	}
}

function handleContainerEnter2(response) {
	// response = { direction }
}

function handleContainerExit2(response) {
	// response = { direction }	
}

function setupStickyfill2() {
	d3.selectAll('.sticky2').each(function () {
		Stickyfill.add(this);
	});
}

function init2() {
	setupStickyfill2();

	// 1. force a resize on load to ensure proper dimensions are sent to scrollama
	handleResize2();

	// 2. setup the scroller passing options
	// this will also initialize trigger observations
	
	// 3. bind scrollama event handlers (this can be chained like below)
	scroller2.setup({
		container: '#scroll2',
		graphic: '.scroll2__graphic2',
		text: '.scroll2__text2',
		step: '.scroll2__text2 .step2',
		debug: false,
	})
		.onStepEnter(handleStepEnter2)
		.onContainerEnter(handleContainerEnter2)
		.onContainerExit(handleContainerExit2);

	// setup resize event
	window.addEventListener('resize', handleResize2);
}

// kick things off
init2();

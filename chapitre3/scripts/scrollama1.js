// using d3 for convenience
var container1 = d3.select('#scroll1');
var graphic1 = container1.select('.scroll1__graphic1');
var chart1 = graphic1.select('.chart1');
var text1 = container1.select('.scroll1__text1');
var step1 = text1.selectAll('.step1');

// initialize the scrollama
var scroller1 = scrollama();

// generic window resize listener event
function handleResize1() {
    // 1. update height of step elements
    var stepHeight = Math.floor(window.innerHeight * 0.75);
    step1.style('height', stepHeight + 'px');

    // 2. update width/height of graphic element
    var bodyWidth = d3.select('body').node().offsetWidth;
    var textWidth = text1.node().offsetWidth;

    var graphicWidth = bodyWidth - textWidth;

    graphic1
        .style('width', bodyWidth + 'px')
        .style('height', window.innerHeight + 'px');

    var chartMargin = 32;
    var chartWidth = graphic1.node().offsetWidth - chartMargin;

    chart1
        //.style('width', chartWidth + 'px')
        //.style('height', Math.floor(window.innerHeight / 2) + 'px');

    // 3. tell scrollama to update new element dimensions
    scroller1.resize();
}

// scrollama event handlers
function handleStepEnter1(response) {
    // response = { element, direction, index }

    // Modifier les steps


	if (Number(response.index)=="2") {
		text1
            .style('margin-right','5%')
            .style('margin-left','auto')
	}

	if (Number(response.index)=="3") {
		text1
            .style('margin-right','auto')
            .style('margin-left','5%')
    }
    
    if (Number(response.index)=="5") {
		text1
            .style('margin-right','auto')
            .style('margin-left','5%')
    }
    
    if (Number(response.index)=="6") {
		text1
            .style('margin-right','auto')
            .style('margin-left','auto')
	}

    // add color to current step only
    step1.classed('is-active', function (d, i) {
        return i === response.index;
    })

    // update graphic based on step
    //chart1.select('p').text(response.index + 1)
    //console.log(document.getElementById('main1').innerHTML);

    document.getElementById(response.index+11).classList.remove('hiddenstuff');
    document.getElementById(response.index+10).classList.add('hiddenstuff');
    
    /*
    if (Number(response.index)==0) {
        document.getElementById('main1').innerHTML = ('<img src="CHAPITRE3/images/IIA/'+(response.index)+'.jpg" alt="Smiley face" height="100%" width="100%">')
    }
    if (Number(response.index)>0) {
        document.getElementById('main1').innerHTML = ('<img class="fading-in" src="CHAPITRE3/images/IIA/'+(response.index)+'.jpg" alt="Smiley face" height="100%" width="100%"> <img class="fading-out" src="CHAPITRE3/images/IIA/'+(response.index-1)+'.jpg" alt="Smiley face" height="100%" width="100%">')
        //('<img src="CHAPITRE3/images/surface-pro.jpg" alt="Smiley face" height="500" width="500">');
    }
    if (Number(response.index)==7) {
        document.getElementById('main1').innerHTML = ('<img src="CHAPITRE3/images/IIA/'+(response.index)+'.jpg" alt="Smiley face" height="100%" width="100%">')
    }
    */
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
// using d3 for convenience
var container0 = d3.select('#scroll0');
var graphic0 = container0.select('.scroll0__graphic0');
var chart0 = graphic0.select('.chart0');
var text0 = container0.select('.scroll0__text0');
var step0 = text0.selectAll('.step0');

// initialize the scrollama
var scroller0 = scrollama();

// generic window resize listener event
function handleResize0() {
    // 1. update height of step elements
    var stepHeight = Math.floor(window.innerHeight * 0.75);
    step0.style('height', stepHeight + 'px');
    /*step2.style('height', '100%');*/

    // 2. update width/height of graphic element
    var bodyWidth = d3.select('body').node().offsetWidth;
    var textWidth = text0.node().offsetWidth;

    var graphicWidth = bodyWidth - textWidth;

    graphic0
        .style('width', bodyWidth + 'px')
        .style('height', window.innerHeight + 'px');

    var chartMargin = 32;
    var chartWidth = graphic0.node().offsetWidth - chartMargin;

    chart0
        //.style('width', chartWidth + 'px')
        //.style('height', Math.floor(window.innerHeight / 2) + 'px');

    // 3. tell scrollama to update new element dimensions
    scroller0.resize();
}

// scrollama event handlers
function handleStepEnter0(response) {
    // response = { element, direction, index }

    // Modifier les steps


	if (Number(response.index)=="2") {
		text0
            .style('margin-right','5%')
            .style('margin-left','auto')
	}

	if (Number(response.index)=="3") {
		text0
            .style('margin-right','auto')
            .style('margin-left','5%')
    }
    
    if (Number(response.index)=="5") {
		text0
            .style('margin-right','auto')
            .style('margin-left','5%')
    }
    
    if (Number(response.index)=="6") {
		text0
            .style('margin-right','auto')
            .style('margin-left','auto')
	}

    // add color to current step only
    step0.classed('is-active', function (d, i) {
        return i === response.index;
    })

    // update graphic based on step
    // chart0.select('p').text(response.index + 1)
    // console.log(document.getElementById('main0').innerHTML);
    document.getElementById(response.index+1).classList.remove('hiddenstuff');
    document.getElementById(response.index).classList.add('hiddenstuff');

    //document.getElementById('main0').innerHTML = ('<img src="images/IA/'+(response.index)+'.jpg" alt="Smiley face" height="100%" width="100%">');
    /*
    if (Number(response.index)==0) {
        document.getElementById('main0').innerHTML = ('<img src="images/IA/'+(response.index)+'.jpg" alt="Smiley face" height="100%" width="100%">')
    }
    if (Number(response.index)>0) {
        document.getElementById('main0').innerHTML = ('<img class="fading-in" src="images/IA/'+(response.index)+'.jpg" alt="Smiley face" height="100%" width="100%"> <img class="fading-out" src="images/IA/'+(response.index-1)+'.jpg" alt="Smiley face" height="100%" width="100%">')
        //('<img src="images/surface-pro.jpg" alt="Smiley face" height="500" width="500">');
    }
    if (Number(response.index)==9) {
        document.getElementById('main0').innerHTML = ('<img src="images/IA/'+(response.index)+'.jpg" alt="Smiley face" height="100%" width="100%">')
    }
    */
}

function handleContainerEnter0(response) {
    // response = { direction }
}

function handleContainerExit0(response) {
    // response = { direction }
}

function setupStickyfill0() {
    d3.selectAll('.sticky0').each(function () {
        Stickyfill.add(this);
    });
}

function init0() {
    setupStickyfill0();

    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize0();

    // 2. setup the scroller passing options
    // this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    scroller0.setup({
        container: '#scroll0',
        graphic: '.scroll0__graphic0',
        text: '.scroll0__text0',
        step: '.scroll0__text0 .step0',
        debug: false,
    })
        .onStepEnter(handleStepEnter0)
        .onContainerEnter(handleContainerEnter0)
        .onContainerExit(handleContainerExit0);

    // setup resize event
    window.addEventListener('resize', handleResize0);
}

// kick things off
init0();
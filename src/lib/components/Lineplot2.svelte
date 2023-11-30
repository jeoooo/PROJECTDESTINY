<script>
	import { onMount, afterUpdate } from 'svelte';
	import { scaleLinear, axisBottom, axisLeft, line, select } from 'd3';
	import * as d3 from 'd3';

	export let data;
	export let width = 150;
	export let height = 100;
	export let areaColor = '#90EE90'; // Hex code for lightgreen

	let tooltip;
	let tooltipLine;

	onMount(() => {
		setupChart();
	});

	afterUpdate(() => {
		setupChart();
	});

	function setupChart() {
		// Remove the existing chart to avoid duplication
		const chartDiv = document.getElementById('chart');
		chartDiv.innerHTML = '';

		// D3.js code for the line chart
		const margin = { top: 10, right: 10, bottom: 10, left: 10 }; // Reduce margin for a compact chart
		const chartWidth = width - margin.left - margin.right;
		const chartHeight = height - margin.top - margin.bottom;

		const svg = select(chartDiv)
			.append('svg')
			.attr('width', width)
			.attr('height', height)
			.append('g')
			.attr('transform', `translate(${margin.left},${margin.top})`);

		const xScale = scaleLinear().domain([1, 10]).range([0, chartWidth]);
		const yScale = scaleLinear()
			.domain([0, d3.max(data, (d) => d.y)])
			.range([chartHeight, 0]);

		const chartLine = line()
			.x((d) => xScale(d.x))
			.y((d) => yScale(d.y));

		// Create an area generator
		const area = d3
			.area()
			.x((d) => xScale(d.x))
			.y0(chartHeight)
			.y1((d) => yScale(d.y));

		// Determine color based on uptime percentage
		const uptimePercentage = data[data.length - 1].y;
		let lineColor = '#008000'; // Default color green in hex
		let gradientColor = areaColor;

		if (uptimePercentage < 75) {
			lineColor = '#FFFF00'; // Yellow in hex
			gradientColor = '#FFFF00';
		}

		if (uptimePercentage < 50) {
			lineColor = '#FF0000'; // Red in hex
			gradientColor = '#FF0000';
		}

		svg
			.append('path')
			.data([data])
			.attr('class', 'line')
			.attr('d', chartLine)
			.attr('fill', 'none')
			.attr('stroke', lineColor);

		// Fill the area under the line with a color gradient
		svg
			.append('path')
			.data([data])
			.attr('class', 'area')
			.attr('d', area)
			.style('fill', `url(#area-gradient-${lineColor})`)
			.on('mousemove', handleMouseMove)
			.on('mouseout', () => {
				tooltip.style('opacity', 0);
				tooltipLine.attr('stroke', 'none');
			});

		// Make axis lines transparent
		svg
			.append('g')
			.attr('transform', `translate(0, ${chartHeight})`)
			.call(axisBottom(xScale).ticks(0).tickSize(0).attr('stroke-opacity', 0));
		svg.append('g').call(axisLeft(yScale).ticks(0).tickSize(0).attr('stroke-opacity', 0));
	}

	function handleMouseMove(event) {
		const mouseX = event.offsetX || event.layerX;
		const mouseY = event.offsetY || event.layerY;

		const invertedX = xScale.invert(mouseX);

		const bisect = d3.bisector((d) => d.x).left;
		const index = bisect(data, invertedX, 1);

		const leftData = data[index - 1];
		const rightData = data[index];
		const closestData = invertedX - leftData.x > rightData.x - invertedX ? rightData : leftData;

		tooltipLine.attr('transform', `translate(${xScale(closestData.x)}, 0)`);
		tooltipLine.attr('stroke', '#ddd');

		tooltip
			.html(`Uptime: ${closestData.y}%`)
			.style('left', `${event.pageX}px`)
			.style('top', `${event.pageY - 30}px`)
			.style('opacity', 1);
	}
</script>

<div id="chart"></div>

<svg width="0" height="0">
	<defs>
		<!-- Define gradients for different colors -->
		<linearGradient id="area-gradient-#008000" gradientTransform="rotate(90)">
			<stop offset="0%" stop-color="white" />
			<stop offset="100%" stop-color="#008000" />
		</linearGradient>
		<linearGradient id="area-gradient-#FFFF00" gradientTransform="rotate(90)">
			<stop offset="0%" stop-color="white" />
			<stop offset="100%" stop-color="#FFFF00" />
		</linearGradient>
		<linearGradient id="area-gradient-#FF0000" gradientTransform="rotate(90)">
			<stop offset="0%" stop-color="white" />
			<stop offset="100%" stop-color="#FF0000" />
		</linearGradient>
	</defs>
</svg>

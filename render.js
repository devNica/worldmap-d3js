const width = 900
const height = 600

const svg = d3.select('.map')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('border', '4px solid #f49f90')
    .style('border-radius', '8px')
    .style('padding', '5px')

const projection = d3.geoMercator().scale(140)
.translate([width/2, height / 1.4 ])
const path = d3.geoPath(projection)

const g = svg.append('g')

d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json', function (data) {
    const countries = topojson.feature(data, data.objects.countries)
    g.selectAll('path')
        .data(countries.features)
        .enter()
        .append('path')
        .attr('class', 'country')
        .attr('d', path)
})

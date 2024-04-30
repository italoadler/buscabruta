// Função assíncrona para buscar os dados da API
async function buscar(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Função para criar o gráfico de velas
function createChart(data) {
    // Configurações do SVG
    const svgWidth = 800, svgHeight = 400;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    // Criar o elemento SVG
    const svg = d3.select('main').append('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Converter dados para o formato apropriado
    data.forEach(d => {
        d[0] = new Date(d[0]); // Tempo
        d[1] = +d[1]; // Abertura
        d[2] = +d[2]; // Alto
        d[3] = +d[3]; // Baixo
        d[4] = +d[4]; // Fechamento
        d[5] = +d[5]; // Volume
    });

    // Escalas
    const xScale = d3.scaleTime()
        .domain(d3.extent(data, d => d[0]))
        .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([d3.min(data, d => d[3]), d3.max(data, d => d[2])])
        .range([height, 0]);

    // Eixos
    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale));

    svg.append('g')
        .call(d3.axisLeft(yScale));

    // Largura das velas
    const candleWidth = width / data.length - 2; // Ajuste conforme necessário

    // Velas
    svg.selectAll('.candle')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', d => xScale(d[0]) - candleWidth / 2)
        .attr('y', d => yScale(Math.max(d[1], d[4])))
        .attr('width', candleWidth)
        .attr('height', d => Math.abs(yScale(d[1]) - yScale(d[4])))
        .attr('fill', d => d[1] > d[4] ? 'red' : 'green'); // Cores para bearish e bullish

    // Pavios
    svg.selectAll('.wick')
        .data(data)
        .enter()
        .append('line')
        .attr('x1', d => xScale(d[0]))
        .attr('y1', d => yScale(d[2]))
        .attr('x2', d => xScale(d[0]))
        .attr('y2', d => yScale(d[3]))
        .attr('stroke', 'black')
        .attr('stroke-width', 1);
}

// URL da API
const url = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d';

// Buscar dados e criar o gráfico
buscar(url).then(data => {
    console.log(data);
    createChart(data);
});

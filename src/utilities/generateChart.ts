import { ChartJSNodeCanvas } from "chartjs-node-canvas";
import chartDataLabels from 'chartjs-plugin-datalabels';
import { ChartConfiguration } from "chart.js";

const width = 1600;
const height = 1200;

const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

function generateChartConfig(histogramData: Record<string, number>): ChartConfiguration {
    const chartConfig = {
        type: 'bar',
        data: {
          labels: Object.keys(histogramData),
          datasets: [{
            label: 'Number of Repeated Values',
            data: Object.values(histogramData),
            backgroundColor: ['red', 'blue', 'yellow']
          }]
        },
        options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  steps: 2,
                  stepValue: 5,
                  min: 0,
                  max: Math.max(...Object.values(histogramData)) + 10
                }
              }
            },
            plugins: {
              datalabels: {
                align: 'top',
                anchor: 'end',
                color: 'black',
                font: {
                  weight: 'bold',
                  size: 12
                },
                formatter: (value: number) => value.toString(),
              }
            }
          },
          plugins: [chartDataLabels]
    };
    return chartConfig as ChartConfiguration;
}


async function generateChart(histogramData: Record<string, number>) {
    const chartConfig = generateChartConfig(histogramData);
    const imageBuffer = await chartJSNodeCanvas.renderToBuffer(chartConfig);
    return imageBuffer;
}
  
export default generateChart;
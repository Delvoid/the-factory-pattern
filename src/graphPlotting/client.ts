import { GraphFactory } from './graph';

const graphFactory = new GraphFactory();

const barGraph = graphFactory.createGraph({
  type: 'BarGraph',
  data: [10, 20, 30, 40],
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
});

const lineGraph = graphFactory.createGraph({
  type: 'LineGraph',
  data: [15, 25, 35, 45],
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
});

barGraph.render();
lineGraph.render();

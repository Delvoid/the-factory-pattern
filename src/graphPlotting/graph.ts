interface BarGraphOptions {
  type: 'BarGraph';
  data: number[];
  labels: string[];
}

interface LineGraphOptions {
  type: 'LineGraph';
  data: number[];
  labels: string[];
}

type GraphOptions = BarGraphOptions | LineGraphOptions;

interface Graph {
  render: () => void;
}

class BarGraph implements Graph {
  constructor(private options: BarGraphOptions) {}

  render(): void {
    console.log(`Rendering BarGraph with data: ${this.options.data}`);
    // Logic for rendering BarGraph...
  }
}

class LineGraph implements Graph {
  constructor(private options: LineGraphOptions) {}

  render(): void {
    console.log(`Rendering LineGraph with data: ${this.options.data}`);
    // Logic for rendering LineGraph...
  }
}

export class GraphFactory {
  createGraph(options: GraphOptions): Graph {
    switch (options.type) {
      case 'BarGraph':
        return new BarGraph(options);
      case 'LineGraph':
        return new LineGraph(options);
      default:
        throw new Error('Invalid graph type');
    }
  }
}

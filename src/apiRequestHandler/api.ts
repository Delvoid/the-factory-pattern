interface GETHandlerOptions {
  type: 'GET';
  url: string;
  headers?: HeadersInit;
  params?: URLSearchParams;
}

interface POSTHandlerOptions<T> {
  type: 'POST';
  url: string;
  body: T;
  headers?: HeadersInit;
}

export type HandlerOptions<T = unknown> = GETHandlerOptions | POSTHandlerOptions<T>;

interface RequestHandler {
  handleRequest: () => void;
}

class GETHandler implements RequestHandler {
  constructor(private options: GETHandlerOptions) {}

  async handleRequest(): Promise<void> {
    console.log(`Handling GET request to URL: ${this.options.url}`);
    try {
      const url = new URL(this.options.url);
      if (this.options.params) {
        url.search = new URLSearchParams(this.options.params).toString();
      }
      const response = await fetch(url.toString(), {
        headers: this.options.headers,
      });
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fetch error: ', error);
    }
  }
}

class POSTHandler<T> implements RequestHandler {
  constructor(private options: POSTHandlerOptions<T>) {}

  async handleRequest(): Promise<void> {
    console.log(
      `Handling POST request to URL: ${this.options.url} with body: ${JSON.stringify(
        this.options.body
      )}`
    );
    try {
      const response = await fetch(this.options.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...this.options.headers,
        },
        body: JSON.stringify(this.options.body),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fetch error: ', error);
    }
  }
}

export class APIHandlerFactory {
  createHandler<T>(options: HandlerOptions<T>): RequestHandler {
    switch (options.type) {
      case 'GET':
        return new GETHandler(options);
      case 'POST':
        return new POSTHandler(options);
      default:
        throw new Error('Invalid request handler type');
    }
  }
}

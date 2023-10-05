import { APIHandlerFactory, HandlerOptions } from './api';

const getFactory = new APIHandlerFactory();

const getOptions: HandlerOptions = {
  type: 'GET',
  url: 'https://api.example.com/data',
  headers: {
    Accept: 'application/json',
  },
};

const getHandler = getFactory.createHandler(getOptions);
getHandler.handleRequest();

interface User {
  name: string;
  age: number;
}

const postFactory = new APIHandlerFactory();

const postOptions: HandlerOptions<User> = {
  type: 'POST',
  url: 'https://api.example.com/user',
  body: {
    name: 'John',
    age: 30,
  },
  headers: {
    'Content-Type': 'application/json',
  },
};

const postHandler = postFactory.createHandler(postOptions);
postHandler.handleRequest();

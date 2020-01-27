import * as cors from 'cors';

import Server from "./server";

import ContactLocalStorageService from './services/contactLocalStorageService'

const server = Server;
const app = server.app;


//options for cors midddleware
const options: cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "*",
    preflightContinue: false
  };
app.use(cors.default(options))

const DEFAULT_ENDPOINT = "/api"
const ENDPOINT_CONTACT = `${DEFAULT_ENDPOINT}/contacts`


app.get(`${ENDPOINT_CONTACT}`, (req, res) => {
  return res.send(ContactLocalStorageService.fetchContacts());
});

app.get(`${ENDPOINT_CONTACT}/:id`, (req, res) => {
  const id = +req.params.id
  return res.send(ContactLocalStorageService.getById(id));
});

app.post(`${ENDPOINT_CONTACT}`, (req, res) => {
  console.log(`${req.params}`)
  return res.send('Received a POST HTTP method');
});

app.put(`${ENDPOINT_CONTACT}`, (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete(`${ENDPOINT_CONTACT}`, (req, res) => {
  return res.send('Received a DELETE HTTP method');
});


server.run();


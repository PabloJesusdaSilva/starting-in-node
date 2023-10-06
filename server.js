import { fastify } from 'fastify';
import { DatabasePostgres } from './database-postges.js';

const server = fastify();

const databse = new DatabasePostgres();

// POST http://localhost:8080/videos

server.post('/videos', async (request, reply) => {
   const { title, description, duration } = request.body;

   await databse.create({
      title,
      description,
      duration
   });

   return reply.status(201).send();
});

server.get('/videos', async (request) => {
   const search = request.query.search;

   const videos = await databse.list();

   return videos;
});

server.put('/videos/:id', async (request, reply) => {
   const videoId = request.params.id;
   const { title, description, duration } = request.body;

   await databse.update(videoId, {
      title, 
      description, 
      duration
   });

   return reply.status(204).send();
});

server.delete('/videos/:id', async (request, reply) => {
   const videoId = request.params.id;

   await databse.delete(videoId);

   return reply.status(204).send();
});

server.listen({
   port: process.env.PORT ?? 3333,
   host: '0.0.0.0',
});
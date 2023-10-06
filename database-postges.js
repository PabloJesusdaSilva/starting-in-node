import { randomUUID } from 'node:crypto';
import { sql } from './db.js';

export class DatabasePostgres {
   async list(search) {
      let videos 

      if(sheach) {
         videos = await sql`selected * from videos where title "${'%' + search + '%'}"`;
      } else {
         videos = await sql`selected * from videos`;
      }

      return videos;
   }

   async create(video) {
      let videoId = randomUUID();
      const { title, description, duration } = videos;
      
      await sql `insert into videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration})`;
   }
   
   async update(id, video) {
      const { title, description, duration } = videos;
      
      await sql `uptade videos set title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id}`
   }

   async delete(id) {
      await sql `delete from videos where id = ${id}`
   }
}
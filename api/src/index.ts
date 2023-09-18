import path from 'node:path';

import express, { json } from 'express';
import mongoose from 'mongoose';
import { router } from './router';

// "mongodb://<Username>:<Password>@<RemoteHost>:<Port>/user"

mongoose.connect('mongodb://root:root@waiterApp_db:27017/')
  .then(() => {
    const app = express();
    const port = 3001;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🚀 Server is running on http:localhost:${port}`);
    });
  })
  .catch((erro) => {
    console.log(erro);
    console.log('Erro ao conectar no mongodb');
  });





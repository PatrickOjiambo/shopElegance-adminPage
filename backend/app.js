import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import registerRoute from './routes/register.js';
import loginRoute from './routes/login.js';
import productRouter from './routes/product.js';

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: '*'
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/product', productRouter);

app.get('/', (req, res) => {
    res.send('The party is started');
  });
  const port = 4345;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
  });
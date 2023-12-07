import express from 'express';
import { SERVER_PORT } from './constants/app.constant.js';
import { apiRouter } from './routers/index.js';
import db from './models/index.cjs';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);


// 구동시 테이블 자동생성
const sequelize = db.sequelize;
(async () => {
 await sequelize.sync();
})();

app.listen(SERVER_PORT, () => {
  console.log(`App listening on port ${SERVER_PORT}`);
});

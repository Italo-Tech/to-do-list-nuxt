import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '123456',
  database: 'task_manager',
});

export function useSequelize() {
  return sequelize;
}

export default sequelize;

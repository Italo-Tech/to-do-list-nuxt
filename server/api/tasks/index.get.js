import tbTasks from '../../models/Task';
import { useSequelize } from '../../config/sequelize.config';

export default defineEventHandler(async (event) => {
  const sequelize = useSequelize();

  tbTasks.init(sequelize);

  try {
    const tasks = await tbTasks.findAll({
      attributes: ['id', 'uuid', 'title', 'description', 'status', 'due_date']
    });

    return { 
      message: 'Lista de tarefas obtida com sucesso!', 
      tasks,
    };
  } catch (error) {
    return sendError(event, createError({
      statusCode: 500,
      statusMessage: 'Erro ao obter a lista de tarefas',
      data: error.message,
    }));
  }
});
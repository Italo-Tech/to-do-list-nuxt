import tbTasks from '../../models/Task';
import { useSequelize } from '../../config/sequelize.config';

export default defineEventHandler(async (event) => {
  const sequelize = useSequelize();

  // Middleware, posterior
  // await validateTask(event);

  const body = await readBody(event);

  tbTasks.init(sequelize);

  try {
    const newTask = await tbTasks.create({
      title: body.title,
      description: body.description,
      status: false,
      due_date: body.due_date,
    });

    return { 
      message: 'Tarefa criada com sucesso!', 
      task: newTask
    };
  } catch(error) {
    return sendError(event, createError({
      statusCode: 500,
      statusMessage: 'Erro ao criar nova tarefa.',
      data: error.message,
    }));
  }
});

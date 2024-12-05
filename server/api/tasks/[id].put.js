import tbTasks from '../../models/Task';
import { useSequelize } from '../../config/sequelize.config';

export default defineEventHandler(async (event) => {
  const sequelize = useSequelize();

  const body = await readBody(event);

  const { id } = event.context.params;

  tbTasks.init(sequelize);

  try {
    const task = await tbTasks.findByPk(id);

    if (!task) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Tarefa não encontrada.',
      });
    }

    await task.update({
      title: body.title,
      description: body.description,
      status: body.status,
      due_date: body.due_date,
    });

    return { 
      message: 'Tarefa atualizada com sucesso!', 
      task 
    };
  } catch (error) {
    return sendError(event, createError({
      statusCode: 500,
      statusMessage: 'Erro ao atualizar a tarefa.',
      data: error.message,
    }));
  }
});

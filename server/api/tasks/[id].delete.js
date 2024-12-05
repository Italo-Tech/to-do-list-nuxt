import tbTasks from '../../models/Task';
import { useSequelize } from '../../config/sequelize.config';

export default defineEventHandler(async (event) => {
  const sequelize = useSequelize();
  
  // Obtém o ID da tarefa dos parâmetros da rota
  const { id } = event.context.params;

  // Inicializa o modelo
  tbTasks.init(sequelize);

  try {
    // Busca a tarefa pelo ID
    const task = await tbTasks.findByPk(id);

    // Verifica se a tarefa existe
    if (!task) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Tarefa não encontrada.',
      });
    }
    await task.destroy();

    return { 
      message: 'Tarefa excluída com sucesso!' 
    };
  } catch (error) {
    return sendError(event, createError({
      statusCode: 500,
      statusMessage: 'Erro ao excluir a tarefa.',
      data: error.message,
    }));
  }
});

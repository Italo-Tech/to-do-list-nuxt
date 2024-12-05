<script setup>
import Swal from 'sweetalert2'
import { ref, onMounted } from 'vue';
import { useTaskStore } from '~/stores/tasks';

const taskStore = useTaskStore();

onMounted(() => {
  taskStore.getAllTasks();
});

const formatDate = (date) => {
  const utcDate = new Date(date);
  return utcDate.toLocaleDateString('pt-BR');
};

const taskCompleted = (task) => {
  taskStore.edit_task = task;

  Swal.fire({
    title: `Concluir '${task.title}'?`,
    text: `Deseja marcar a tarefa '${task.title}' como concluída?`,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim, concluir!",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      taskStore.editTask(taskStore.edit_task)
    }
    if(result.isDenied || result.isDismissed) {
      taskStore.edit_task.status = false
    }
  });
}

const taskPending = (task) => {
  taskStore.edit_task = task;

  Swal.fire({
    title: `Marcar '${task.title}' como pendente?`,
    text: `Deseja marcar a tarefa '${task.title}' como pendente?`,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim, concluir!",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      taskStore.editTask(taskStore.edit_task)
    }
    if(result.isDenied || result.isDismissed) {
      taskStore.edit_task.status = true
    }
  });
}

const handleEditTask = (payload) => {
  taskStore.edit_task = payload
  taskStore.editing = true
}

const handleRemoveTask = (payload) => {
  Swal.fire({
    title: "Remover Tarefa?",
    text: "Não será possível restaurar a tarefa!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim, remover!",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      taskStore.removeTask(payload);
    }
  });
};
</script>

<template>
  <div class="" style="background-color: #002; height: 100vh">

    <div class="px-4">
      <div class="row">
        <div class="col">
          <h2 v-if="!taskStore.editing" class="text-center mb-4 pt-4 text-white">Nova Tarefa</h2>
          <h2 v-else class="text-center mb-4 pt-4 text-white">Atualizar Tarefa</h2>

          <!-- Criar -->
          <CreateTask v-if="!taskStore.editing" />

          <!-- Editar -->
          <EditTask v-else />
        </div>
        
        <!-- Tarefas Pendentes -->
        <div class="col">
          <h2 class="text-center mb-4 pt-4 text-white">Pendentes</h2>

          <div v-if="taskStore.getTaskArray('status', false).length >= 1">
            <ul class="list-group mt-4">
              <li
                v-for="(task, index) in taskStore.getTaskArray('status', false)"
                :key="task.id"
                class="list-group-item d-flex justify-content-between align-items-center"
                :class="{ 'list-group-item-success': task.status }"
              >
                <div class="d-flex">
                  <input
                    v-model="task.status"
                    @click="taskCompleted(task)"
                    type="checkbox"
                    class="form-check-input me-2"
                  />
                  <div class="d-flex" style="flex-direction: column;">
                    <span class="fs-6 fw-bold">{{ task.title }}</span>
                    <span class="fs-6 text-wrap">{{ task.description }}</span>
                    <span class="fw-light fs-6">Termina em: {{ formatDate(task.due_date) }}</span>
                  </div>
                  
                </div>
        
                <div class="">
                  <button class="btn btn-secondary btn-sm px-2 fw-light" 
                    @click="handleEditTask(task)" style="margin-right: 6px;">
                    Editar
                  </button>
                  <i class="bi bi-trash2"></i>
                  <button class="btn btn-danger btn-sm px-2 fw-light" 
                    @click="handleRemoveTask(task)">
                    Excluir
                  </button>
                </div>
                
              </li>
            </ul>
          </div>

          <div v-else style="display: flex; justify-content: center; align-items: center">
            <span class="fs-5 text-white">Nenhuma tarefa pendente</span>
          </div>
        </div>
        <!-- Tarefas Concluídas -->
        <div class="col">
          <h2 class="text-center mb-4 pt-4 text-white">Concluídas</h2>
          
          <div v-if="taskStore.getTaskArray('status', true).length >= 1">
            <ul class="list-group mt-4">
              <li
                v-for="(task, index) in taskStore.getTaskArray('status', true)"
                :key="task.id"
                class="list-group-item d-flex justify-content-between align-items-center"
                :class="{ 'list-group-item-success': task.status }"
              >
                <div class="d-flex">
                  <input
                    v-model="task.status"
                    @click="taskPending(task)"
                    type="checkbox"
                    class="form-check-input me-2"
                  />
                  <div class="d-flex" style="flex-direction: column;">
                    <span class="fs-6 fw-bold">{{ task.title }}</span>
                    <span class="fs-6 text-wrap">{{ task.description }}</span>
                    <span class="fw-light fs-6">Termina em: {{ formatDate(task.due_date) }}</span>
                  </div>
                  
                </div>
        
                <div class="">
                  <button class="btn btn-secondary btn-sm px-2 fw-light" 
                    @click="handleEditTask(task)" style="margin-right: 6px;">
                    Editar
                  </button>
                  <i class="bi bi-trash2"></i>
                  <button class="btn btn-danger btn-sm px-2 fw-light" 
                    @click="handleRemoveTask(task)">
                    Excluir
                  </button>
                </div>
                
              </li>
            </ul>
          </div>

          <div v-else style="display: flex; justify-content: center; align-items: center">
            <span class="fs-5 text-white">Nenhuma tarefa concluída</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Estilo opcional */
.container {
  max-width: 600px;
}
</style>

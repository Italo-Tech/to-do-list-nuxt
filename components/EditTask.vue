<script setup>
import { useTaskStore } from '~/stores/tasks';

const taskStore = useTaskStore();

const handleEditTask = (payload) => {
  taskStore.editTask(payload)
};

const formattedDueDate = computed({
  get: () => {
    // Converte para o formato YYYY-MM-DD
    const date = new Date(taskStore.edit_task.due_date);
    return date.toISOString().split('T')[0]; // Obtém apenas a parte da data
  },
  set: (newDate) => {
    // Converte de volta para o formato ISO 8601 com hora (se necessário)
    taskStore.edit_task.due_date = new Date(newDate).toISOString();
  },
});
</script>

<template>
  <div>
    <!-- Title -->
    <div class="form-floating mb-3">
      <input v-model="taskStore.edit_task.title" id="title" type="text" class="form-control">
      <label for="title">Tarefa</label>
    </div>

    <!-- Descrição -->
    <div class="form-floating mb-3">
      <textarea v-model="taskStore.edit_task.description" class="form-control" id="description" style="height: 100px"></textarea>
      <label for="description">Descrição</label>
    </div>

    <!-- Data de Vencimento -->
    <div class="mb-3">
      <input
        v-model="formattedDueDate"
        type="date"
        class="p-3 rounded"
        style="width: 100%;"
      />
    </div>

    <!-- Botão -->
    <button @click.prevent="handleEditTask(taskStore.edit_task)"
        class="btn btn-primary" 
        style="width: 100%;"
        :disabled="!taskStore.edit_task.title">
      Salvar
    </button>
  </div>
</template>
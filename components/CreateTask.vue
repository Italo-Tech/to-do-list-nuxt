<script setup>
import { useTaskStore } from '~/stores/tasks';

const taskStore = useTaskStore();

const minDate = new Date().toISOString().split('T')[0];

const handleAddTask = (payload) => {
  taskStore.addTask(payload)
};
</script>

<template>
  <div>
    <!-- Title -->
    <div class="form-floating mb-3">
      <input v-model="taskStore.new_task.title" id="title" type="text" class="form-control">
      <label for="title">Tarefa</label>
    </div>

    <!-- Descrição -->
    <div class="form-floating mb-3">
      <textarea v-model="taskStore.new_task.description" class="form-control" id="description" style="height: 100px"></textarea>
      <label for="description">Descrição</label>
    </div>

    <!-- Data de Vencimento -->
    <div class="mb-3">
      <input
        v-model="taskStore.new_task.due_date"
        type="date"
        class="p-3 rounded"
        style="width: 100%;"
        :min="minDate"
      />
    </div>

    <!-- Botão -->
    <button @click.prevent="handleAddTask(taskStore.new_task)" 
        class="btn btn-primary" 
        style="width: 100%;" 
        :disabled="!taskStore.new_task.title">
      Adicionar Tarefa
    </button>
  </div>
</template>
import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    data: [],
    new_task: {
      title: '',
      description: '',
      status: false,
      due_date: null
    },
    edit_task: {},
    editing: false
  }),
  getters: {
    getTaskArray: (state) => (key, value) => {
        if (state.data !== undefined) {
            return state.data.filter(item => {
                return item[`${key}`] === value;
            });
        }
        return [];
    }
},
  actions: {
    async getAllTasks() {
      axios.get(`/api/tasks`).then(response => {
        this.data = response.data.tasks
      
      }).catch(error => {
          if(error.request.status === 400) {
            console.error('Erro ao buscar tarefas:', error);
          }
      });
    },
    async addTask(task) {
      try {
        const response = await axios.post('/api/tasks', task);
        this.tasks.push(response.data.task);
        this.getAllTasks()
      } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
      }
    },
    async editTask(task) {
      try {
        const response = await axios.put(`/api/tasks/${task.id}`, task);
        Swal.fire({
          title: "Sucesso",
          text: "Tarefa atualizada !",
          icon: "success",
          showConfirmButton: false,
          timer: 2000
        });

        this.editing = false;
        
        this.getAllTasks();
      } catch (error) {
        console.error('Erro ao editar tarefa:', error);
      }
    },    
    async removeTask(task) {
      try {
        await axios.delete(`/api/tasks/${task.id}`);

        Swal.fire({
          title: "Sucesso",
          text: "Tarefa removida !",
          icon: "success",
          showConfirmButton: false,
          timer: 2000
        });

        this.getAllTasks()
      } catch (error) {
        console.error('Erro ao remover tarefa:', error);
      }
    },
  },
});

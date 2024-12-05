<template>
  <div class="full-screen">
    <div class="message animate__animated animate__fadeIn">
      <h1 class="animate__animated ">Olá sou o Ítalo e seja muito bem-vindo ao gerenciador de tarefas!</h1>

      <button class="btn btn-primary btn-lg mt-4" @click="navigateToPage">Criar Tarefas</button>
    </div>
  </div>
</template>

<script setup>
import 'animate.css';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToPage = () => {
  router.push('/tasks');  // Substitua '/outra-pagina' pela rota desejada
};
</script>

<style>
.full-screen {
  height: 100vh;
  background-color: #002;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.message h1 {
  font-size: 3rem;
  text-align: center;
  animation-duration: 1.5s;
}
</style>

<!-- Instalar Animate.css no seu projeto -->

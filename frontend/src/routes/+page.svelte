<script>
  import { onMount } from 'svelte';

  let tasks = [];
  let message = '';

  onMount(async () => {
    try {
      const response = await fetch('http://localhost:3000/api/tasks');
      tasks = await response.json();
      
      const helloResponse = await fetch('http://localhost:3000/api/hello');
      const helloData = await helloResponse.json();
      message = helloData.message;
    } catch (error) {
      console.error('Erreur lors du chargement des données:', error);
    }
  });
</script>

<main class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8 text-center text-purple-600">{message}</h1>
  
  <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
    <h2 class="text-2xl font-semibold mb-4">Mes Tâches</h2>
    
    <ul class="space-y-3">
      {#each tasks as task}
        <li class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <input
            type="checkbox"
            checked={task.completed}
            class="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
          />
          <span class="ml-3 text-gray-700 {task.completed ? 'line-through' : ''}">
            {task.title}
          </span>
        </li>
      {/each}
    </ul>
  </div>
</main>

<style>
  :global(body) {
    background-color: #f3f4f6;
  }
</style>

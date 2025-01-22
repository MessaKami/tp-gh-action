const fastify = require('fastify')({ logger: true })
const cors = require('@fastify/cors')

// Activation du CORS
fastify.register(cors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// Route de test
fastify.get('/api/hello', async (request, reply) => {
  return { message: 'Bonjour depuis l\'API!' }
})

// Route pour obtenir une liste de tâches (exemple)
fastify.get('/api/tasks', async (request, reply) => {
  return [
    { id: 1, title: 'Apprendre Docker', completed: false },
    { id: 2, title: 'Maîtriser SvelteKit', completed: false },
    { id: 3, title: 'Développer une API Fastify', completed: true }
  ]
})

// Démarrage du serveur
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start() 
# Application de Gestion de Tâches

Une application de démonstration utilisant SvelteKit pour le frontend et Fastify pour l'API, conteneurisée avec Docker.

## Technologies Utilisées

- **Frontend** : SvelteKit + TailwindCSS
- **Backend** : Fastify + CORS
- **Conteneurisation** : Docker + Docker Compose
- **CI/CD** : GitHub Actions

## Structure du Projet

```
.
├── frontend/          # Application SvelteKit
├── backend/          # API Fastify
├── .github/          # Configuration GitHub Actions
└── docker-compose.yml # Configuration Docker pour le développement
```

## Développement

1. Cloner le projet :
```bash
git clone <votre-repo>
cd <votre-repo>
```

2. Lancer l'application en développement :
```bash
docker compose up
```

L'application sera disponible sur :
- Frontend : http://localhost:5173
- API : http://localhost:3000

## Production

Pour déployer en production :

1. Configurer les secrets GitHub :
   - `SSH_PRIVATE_KEY`
   - `VPS_HOST`
   - `VPS_USER`

2. Pousser sur la branche main pour déclencher le déploiement automatique

## API Endpoints

- `GET /api/hello` - Message de test
- `GET /api/tasks` - Liste des tâches

## Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'feat: Ajouter une nouvelle fonctionnalité'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request
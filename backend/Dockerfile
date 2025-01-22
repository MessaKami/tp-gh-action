# Utilisation d'une image Node.js légère
FROM node:20-alpine

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./
RUN npm install --production

# Copie du code source
COPY . .

# Exposition du port
EXPOSE 3000

# Démarrage de l'application
CMD ["npm", "start"] 
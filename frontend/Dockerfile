# Étape de build
FROM node:20-alpine as builder

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./
RUN npm install

# Copie du reste des fichiers
COPY . .

# Build de l'application
RUN npm run build

# Étape de production
FROM node:20-alpine

WORKDIR /app

# Copie des fichiers de production
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules

# Exposition du port
EXPOSE 3000

# Démarrage de l'application
CMD ["node", "build"] 
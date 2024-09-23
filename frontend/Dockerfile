
# Используем официальный Node.js образ
FROM node:16

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы в контейнер
COPY . .

# Собираем приложение
RUN npm run build

# Устанавливаем сервер
RUN npm install -g serve

# Запускаем приложение
CMD ["serve", "-s", "build", "-l", "3000"]


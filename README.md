# Fanfiction Website

Веб-сайт для создания и публикации фанфиков.

## Технологии

- Frontend: React.js
- Backend: Node.js, Express
- База данных: JSON файлы (временное решение)

## Установка и запуск

### Требования
- Node.js
- npm

### Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/bbynesty/fanfiction-site.git
cd fanfiction-site
```

2. Установите зависимости для клиента:
```bash
cd client
npm install
```

3. Установите зависимости для сервера:
```bash
cd ../server
npm install
```

### Запуск

1. Запустите сервер:
```bash
cd server
node server.js
```

2. В другом терминале запустите клиент:
```bash
cd client
npm start
```

Приложение будет доступно по адресу http://localhost:3000

## Функциональность

- Создание новых историй
- Просмотр существующих историй
- Поделиться историями

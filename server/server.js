const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// Путь к файлу с данными
const dataFile = path.join(__dirname, 'stories.json');

// Создаем файл stories.json, если его нет
if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, JSON.stringify({ stories: [] }));
}

// Функция для чтения данных
const readData = () => {
  try {
    const data = fs.readFileSync(dataFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return { stories: [] };
  }
};

// Функция для записи данных
const writeData = (data) => {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
};

// Тестовый маршрут
app.get('/api/test', (req, res) => {
  res.json({ message: 'Сервер работает!' });
});

// Создание новой истории
app.post('/api/stories', (req, res) => {
  try {
    const data = readData();
    const story = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString()
    };
    data.stories.push(story);
    writeData(data);
    res.status(201).json(story);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Получение всех историй
app.get('/api/stories', (req, res) => {
  try {
    const data = readData();
    res.json(data.stories.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Поиск историй
app.get('/api/stories/search', (req, res) => {
  try {
    const { term, type } = req.query;
    const data = readData();
    let stories = data.stories;
    
    if (term) {
      stories = stories.filter(story => {
        if (type === 'title') {
          return story.title.toLowerCase().includes(term.toLowerCase());
        } else if (type === 'quote') {
          return story.content.toLowerCase().includes(term.toLowerCase());
        }
        return true;
      });
    }
    
    res.json(stories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

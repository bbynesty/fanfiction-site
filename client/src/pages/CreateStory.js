import React, { useState } from 'react';

function CreateStory() {
  const [story, setStory] = useState({
    title: '',
    content: '',
    tags: '',
    fandom: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправка истории:', story);
    // Здесь будет логика отправки на сервер
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2>Создать новую историю</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Название:</label>
          <input
            type='text'
            value={story.title}
            onChange={(e) => setStory({...story, title: e.target.value})}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
            required
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Содержание:</label>
          <textarea
            value={story.content}
            onChange={(e) => setStory({...story, content: e.target.value})}
            style={{
              width: '100%',
              height: '300px',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              resize: 'vertical'
            }}
            required
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Теги (через запятую):</label>
          <input
            type='text'
            value={story.tags}
            onChange={(e) => setStory({...story, tags: e.target.value})}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
            placeholder='романтика, приключения, фэнтези'
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Фандом:</label>
          <input
            type='text'
            value={story.fandom}
            onChange={(e) => setStory({...story, fandom: e.target.value})}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
            placeholder='Название фандома'
          />
        </div>

        <button
          type='submit'
          style={{
            padding: '10px 20px',
            backgroundColor: '#2c3e50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Опубликовать
        </button>
      </form>
    </div>
  );
}

export default CreateStory;

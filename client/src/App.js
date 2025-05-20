import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateStory from './pages/CreateStory';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('title');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Поиск:', searchTerm, 'Тип:', searchType);
    setSearchResults([
      { id: 1, title: 'История 1', quote: 'Цитата 1' },
      { id: 2, title: 'История 2', quote: 'Цитата 2' },
    ]);
  };

  return (
    <Router>
      <div>
        <nav style={{ 
          background: '#2c3e50', 
          padding: '1rem',
          marginBottom: '20px'
        }}>
          <Link to='/' style={{ 
            color: 'white', 
            marginRight: '1rem', 
            textDecoration: 'none',
            fontSize: '18px'
          }}>Главная</Link>
          <Link to='/stories' style={{ 
            color: 'white', 
            marginRight: '1rem', 
            textDecoration: 'none',
            fontSize: '18px'
          }}>Истории</Link>
          <Link to='/create' style={{ 
            color: 'white', 
            marginRight: '1rem', 
            textDecoration: 'none',
            fontSize: '18px'
          }}>Создать</Link>
          <Link to='/login' style={{ 
            color: 'white', 
            textDecoration: 'none',
            fontSize: '18px'
          }}>Войти</Link>
        </nav>

        <div style={{ padding: '20px' }}>
          <form onSubmit={handleSearch} style={{ 
            maxWidth: '600px', 
            margin: '0 auto',
            padding: '20px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px'
          }}>
            <div style={{ 
              display: 'flex',
              gap: '20px',
              marginBottom: '15px',
              justifyContent: 'center'
            }}>
              <label>
                <input
                  type='radio'
                  value='title'
                  checked={searchType === 'title'}
                  onChange={(e) => setSearchType(e.target.value)}
                />
                По названию
              </label>
              <label>
                <input
                  type='radio'
                  value='quote'
                  checked={searchType === 'quote'}
                  onChange={(e) => setSearchType(e.target.value)}
                />
                По цитате
              </label>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type='text'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={searchType === 'title' ? 'Поиск по названию...' : 'Поиск по цитате...'}
                style={{
                  flex: 1,
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '16px'
                }}
              />
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
                Найти
              </button>
            </div>
          </form>

          {searchResults.length > 0 && (
            <div style={{
              maxWidth: '600px',
              margin: '20px auto',
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h2>Результаты поиска:</h2>
              {searchResults.map(result => (
                <div key={result.id} style={{
                  padding: '15px',
                  borderBottom: '1px solid #eee'
                }}>
                  <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>{result.title}</h3>
                  <p style={{ margin: 0, color: '#666' }}>{result.quote}</p>
                </div>
              ))}
            </div>
          )}

          <Routes>
            <Route path='/' element={<div>Главная страница</div>} />
            <Route path='/stories' element={<div>Список историй</div>} />
            <Route path='/create' element={<CreateStory />} />
            <Route path='/login' element={<div>Вход</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllBooks } from './redux/books/books';
import Header from './components/Header/Header';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/books" />} />
        <Route path="/books" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<Books />} />
      </Routes>
    </>
  );
}

export default App;

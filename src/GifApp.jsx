import { useState } from 'react';
import { AddCategory, GiftGrid } from './components';

const GifApp = () => {
  const [categories, setCategories] = useState(['Headbang']);

  const onNewCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1 className="m-3">🤘 Gipher 🤘</h1>

      <hr />
      <AddCategory onNewCategory={onNewCategory} />

      {categories.map((category) => (
        <GiftGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifApp;

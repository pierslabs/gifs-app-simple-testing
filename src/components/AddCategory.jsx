import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ onNewCategory }) => {
  const [value, setValue] = useState('');

  const onInputchange = ({ target }) => {
    setValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length <= 1) return;

    setValue('');
    onNewCategory(value.trim());
  };

  return (
    <div className="container ">
      <form onSubmit={onSubmit} aria-label="form">
        <div className="d-flex justify-content-center ">
          <div className="col-9 m-1">
            <input
              type="text"
              className="form-control"
              placeholder="Find gifs ..."
              onChange={onInputchange}
              value={value}
            />
          </div>
          <div className="col-1 m-1">
            <button className="btn btn-primary" type="submit">
              Find
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};

export default AddCategory;

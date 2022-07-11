import { GoTrashcan } from 'react-icons/go';
import PropTypes from 'prop-types';

function Todo(props) {
  const {
    todoz, checkTodo, editTodo, removeTodo,
  } = props;

  const list = todoz.map((todo) => {
    const { id, check, item } = todo;
    return (
      <li className="todo" key={id}>
        <input type="checkbox" onChange={checkTodo} className={`check check${id}`} id={`check${id}`} checked={check} />
        {' '}
        <input type="text" readOnly={check} className={check ? 'all-todo btn-checked' : 'all-todo editable'} defaultValue={item} onKeyDown={editTodo} id={`input${id}`} />
        {' '}
        <button type="button" className={`btn btn${id}`} onClick={() => removeTodo(id)}>
          <GoTrashcan />
          {' '}
        </button>
        {' '}
      </li>
    );
  });

  return (
    <ul>
      {list}
      ;
    </ul>
  );
}

Todo.propTypes = {
  todoz: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    item: PropTypes.string,
    check: PropTypes.bool,
  })).isRequired,
  checkTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default Todo;

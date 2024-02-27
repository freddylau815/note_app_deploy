import { NavLink } from 'react-router-dom';

function Header({ setShowNoteForm }) {
  const showModal = () => setShowNoteForm(true);

  return (
    <header className='row justify-between align-center'>
      <h3 className=''>Notes App</h3>

      <nav>
        <NavLink to='/'>Home</NavLink>
        <button className='create-btn' onClick={showModal}>
          Create Note
        </button>
      </nav>
    </header>
  );
}

export default Header;

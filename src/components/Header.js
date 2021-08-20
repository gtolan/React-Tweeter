import Button from './Button';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom'
// import {useStore} from 'easy-peasy'

const Header = ({showForm, title, showAddButton}) => {
    // const tasks = useStore().getState().todos;
    // console.log('tasks header', tasks)
    const location = useLocation();
    return (
        <header className='header'>
            <h1>{title}</h1>
                {location.pathname === '/' && (<Button color={showAddButton ? 'red' : 'green'}
                            text={!showAddButton ? 'Add' : 'Close'} 
                            onClick={showForm} />)
                } 
        </header>
        
    )
}



Header.defaultProps = {
    title:"default title if none in parent component"
}

Header.propTypes = {
    title:PropTypes.string,
    showForm:PropTypes.func
}


export default Header;

import Button from './Button';
import PropTypes from 'prop-types';

const Header = ({showForm, title, showAddButton}) => {
//const Header = ({title}) => {
    return (
        <header className='header'>
          <h1>{title}</h1> 
            <Button color={showAddButton ? 'red' : 'green'}
                    text={!showAddButton ? 'Add' : 'Close'} 
                    onClick={showForm} />
        </header>
    )
}



Header.defaultProps = {
    title:"default title if none in parent component"
}

Header.propTypes = {
    title:PropTypes.string,
    showForm:PropTypes.func
    //title:PropTypes.string.isRequired
}
//          <h1 style={{color:'red', backgroundColor:'black', marginBottom:0}}>Task Tracker {props.title}</h1> 
//<h3 style={headingStyle}>Sub header</h3>
//CSS in JS
// const headingStyle ={
//     margin:0,
//     color:'red',
//     backgroundColor:'gold'
// }

export default Header;

import {ReactComponent as GithubIcon} from '../../assents/img/git.svg';
import './styles.css';

function Navbar () {
    return(
        <header>
        <nav className='container'>
        <div className='dsmovie-nav-content'>
          <h1>DSmovie</h1>
        <a href="https://github.com/JuniorRodrigu">
        <div className='dsmovie-contact-cobtainer'>
        <GithubIcon/>
        <p className='ggit'>junior</p>
        </div>
        </a>
        </div>
        </nav>
        
            </header>


    );
    
}
export default Navbar;
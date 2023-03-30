import '../../styles/index.css';
import logo from '../../assets/logo.svg';

export const Header = () => {
    return(
        <header>
            <div className="divLogo">
                <img className='logoKenzie' src={logo} alt='Logo Kenzie' />
            </div>
        </header>
    );
};

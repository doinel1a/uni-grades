import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { useStateContext } from '../contexts/ContextProvider';
import Paragraph from './HtmlElements/Paragraph';

const Header: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useStateContext();
    
    return(
        <header className={` w-full header-h sticky top-0 z-10 flex justify-center border-b transition-colors ${ isDarkMode ? 'bg-zinc-900' : 'bg-gray-400' } `}>
            <div className='container h-full flex items-center px-3'>
                <Link href='/'>
                    <a className='mr-auto'>
                        <Paragraph text='UniGrades' customCss='logo flex-shrink-0' />
                    </a>
                </Link>
                <button
                    type='button'
                    aria-label='Insert new Exam'
                    className='mr-1 lg:mr-3 rounded-full cursor-pointer hover:bg-white focus:bg-white bg-opacity-0 p-2'
                >
                    <FontAwesomeIcon 
                        icon={ faPlusCircle }
                        className={ `w-8 text-red-500` }
                    />
                </button>
                <button
                    type='button'
                    aria-label='Theme handler'
                    className='ml-1 lg:ml-3 rounded-full cursor-pointer hover:bg-white focus:bg-white bg-opacity-0 p-2'
                    onClick={ (_e) => { setIsDarkMode((_prevState: boolean) => !_prevState); _e.currentTarget.blur(); } }
                >
                    <FontAwesomeIcon 
                        icon={ isDarkMode ? faSun : faMoon }
                        className={ `w-8 ${ isDarkMode ? 'text-amber-200' : 'text-amber-500' }` }
                    />
                </button>
            </div>
        </header>
    );
};

export default Header;
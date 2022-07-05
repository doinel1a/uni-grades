import { useStateContext } from '../contexts/ContextProvider';
import Paragraph from './HtmlElements/Paragraph';

const Footer: React.FC = () => {
    const { isDarkMode } = useStateContext();
    
    return(
        <footer className={` w-full footer-h fixed bottom-0 flex justify-center items-center border-t transition-colors ${ isDarkMode ? 'bg-zinc-900' : 'bg-gray-400' } `}>
            <Paragraph text='© 2022 — D1A' customCss='cursor-default' />
        </footer>
    );
};

export default Footer;
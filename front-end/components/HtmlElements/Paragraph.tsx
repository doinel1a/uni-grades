import { useStateContext } from '../../contexts/ContextProvider';

interface IParagraphProps {
    text: string;
    customCss?: string;
};

const Paragraph: React.FC<IParagraphProps> = ({ text, customCss }) => {
    const { isDarkMode } = useStateContext();

    return(
        <p className={` flex-shrink-0 transition-colors ${ isDarkMode ? 'text-white' : 'text-[#333]' } ${ customCss ? customCss : '' } `}>
            { text }
        </p>
    );
};

export default Paragraph;
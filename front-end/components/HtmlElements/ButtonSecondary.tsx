import Paragraph from './Paragraph';

interface IButtonSecondary {
    text: string;
    url: string;
};

const ButtonSecondary: React.FC<IButtonSecondary> = ({ text, url}) => {
    return(
        <button 
            type='button'
            className='h-14 flex-shrink-0 rounded-lg transition-colors'
        >
            <Paragraph text={ text } customCss='w-42 text-xl font-bold !text-red-400 hover:!text-red-600' />
        </button>
    );
};

export default ButtonSecondary;
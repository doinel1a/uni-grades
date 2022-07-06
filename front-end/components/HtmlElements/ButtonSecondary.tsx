import { MouseEventHandler } from 'react';
import Paragraph from './Paragraph';

interface IButtonSecondary {
    text: string;
    onClick?: MouseEventHandler | undefined;
};

const ButtonSecondary: React.FC<IButtonSecondary> = ({ text, onClick }) => {
    return(
        <button 
            type='button'
            className='h-12 flex-shrink-0 rounded-lg transition-colors'
            onClick={ onClick }
        >
            <Paragraph text={ text } customCss='w-42 font-bold !text-red-400 hover:!text-red-600' />
        </button>
    );
};

export default ButtonSecondary;
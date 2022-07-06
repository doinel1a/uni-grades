import { MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import Paragraph from './Paragraph';

interface IButtonPrimary {
    type: 'button' | 'submit';
    text: string;
    icon: IconProp;
    customCss?: string;
    onClick?: MouseEventHandler | undefined;
};

const ButtonPrimary: React.FC<IButtonPrimary> = ({ type, text, icon, customCss }) => {
    return(
        <button 
            type={ type }
            className={`
                w-auto h-12 flex justify-center items-center flex-shrink-0 px-6 py-0 border rounded-lg transition-colors
                ${
                    customCss ?
                        customCss
                    :
                        'bg-red-500 hover:bg-red-600 focus:bg-red-600'
                } 
            `}
        >
            <a target='_blank' rel='noopener' className='flex justify-center items-center' tabIndex={-1}>
                <FontAwesomeIcon
                    icon={ icon }
                    className='w-5 text-sm flex-shrink-0 mr-2 transition-colors text-white'
                />
                <Paragraph text={ text } customCss='w-auto ml-2 font-bold !text-white' />
            </a>
        </button>
    );
};

export default ButtonPrimary;
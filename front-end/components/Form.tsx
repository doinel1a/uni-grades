import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { useStateContext } from '../contexts/ContextProvider';

import ButtonPrimary from './HtmlElements/ButtonPrimary';
import ButtonSecondary from './HtmlElements/ButtonSecondary';
import Paragraph from './HtmlElements/Paragraph';

interface IFormProps {
    subject: string;
    setSubject: Dispatch<SetStateAction<string>>;
    credits: number;
    setCredits: Dispatch<SetStateAction<number>>;
    grade: number;
    setGrade: Dispatch<SetStateAction<number>>;
    action: React.FormEventHandler<HTMLFormElement>;
    primaryButtonText: string;
    buttonSecondaryAction: MouseEventHandler;
};

const Form: React.FC<IFormProps> = ({
    subject, setSubject,
    credits, setCredits, 
    grade, setGrade,
    action, 
    primaryButtonText, buttonSecondaryAction
}) => {
    const { isDarkMode } = useStateContext();

    return(
        <form 
            className={` w-80 lg:w-96 h-96 lg:h-96 flex flex-col justify-between p-4 rounded-xl ${ isDarkMode ? 'bg-zinc-800' : 'bg-gray-200' } `}
            onSubmit={ _e => action(_e) }
        >
            <div className='flex flex-col gap-y-2'>
                <label htmlFor='subject'>
                    <Paragraph
                        text='Subject'
                        customCss='font-bold'
                    />
                </label>
                <input 
                    id='subject' 
                    type='text'
                    className='rounded-lg ml-3 p-1 outline-none focus:bg-gray-300' 
                    value={ subject } 
                    onChange={ _e => setSubject(_e.target.value) }
                />

                <label htmlFor='credits'>
                    <Paragraph
                        text='Credits'
                        customCss='font-bold'
                    />
                </label>
                <input 
                    id='credits' 
                    type='text' 
                    className='rounded-lg ml-3 p-1 outline-none focus:bg-gray-300' 
                    value={ credits } 
                    onChange={ _e => setCredits(Number(_e.target.value)) }
                />

                <label htmlFor='grade'>
                    <Paragraph
                        text='Grade'
                        customCss='font-bold'
                    />
                </label>
                <input 
                    id='grade' 
                    type='text'
                    className='rounded-lg ml-3 p-1 outline-none focus:bg-gray-300' 
                    value={ grade } 
                    onChange={ _e => setGrade(Number(_e.target.value)) }
                />
            </div>

            <div className='flex justify-between px-4'>
                <ButtonPrimary
                    type='submit'
                    text={ primaryButtonText }
                    icon={ faCheck }
                    customCss='bg-green-600 hover:bg-green-700 focus:bg-green-700'
                />
                <ButtonSecondary 
                    text='Cancel'
                    onClick={ buttonSecondaryAction }
                />
            </div>
        </form>
    );
};

export default Form;
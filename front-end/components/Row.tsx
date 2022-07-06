import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import { useStateContext } from '../contexts/ContextProvider';

import Paragraph from './HtmlElements/Paragraph';
import Link from 'next/link';

interface IRowProps {
    id: string;
    subject: string;
    credits: number;
    grade: number;
    deleteExamHandler: Function;
};

const Row: React.FC<IRowProps> = ({ id, subject, credits, grade, deleteExamHandler }) => {
    const { isDarkMode } = useStateContext();

    return(
        <div className={` w-full h-36 flex justify-between flex-shrink-0 rounded-lg transition-colors ${ isDarkMode ? 'bg-zinc-800' : 'bg-gray-300' } `}>
            <div className='w-3/4 flex flex-col gap-y-4 p-3'>
                <Paragraph 
                    text={ subject }
                    customCss='text-lg lg:text-xl text-left font-bold'
                />
                <Paragraph 
                    text={`${ credits } Credits`}
                    customCss='text-lg lg:text-xl'
                />
            </div>
            <div className='w-1/4 lg:w-1/6 flex flex-col'>
                <div className='w-full h-1/3 flex justify-center items-center rounded-tr-lg rounded-bl-lg bg-red-500'>
                    <Paragraph 
                        text={`${ grade }`}
                        customCss='text-2xl lg:text-3xl'
                    />
                </div>
                <div className='w-full h-2/3 flex flex-col lg:flex-row justify-around items-end lg:pb-4 px-2 py-1'>
                    <button type='button' aria-label="Edit exam's details">
                        <Link href={ `/${encodeURIComponent(id)}` }>
                            <a>
                                <FontAwesomeIcon
                                    icon={ faPenToSquare }
                                    className={` w-7 lg:w-8 h-7 lg:h-8 transition-colors  ${ isDarkMode ? 'text-white' : 'text-[#333]'} `}
                                />
                            </a>
                        </Link>
                    </button>   
                    <button type='button' aria-label="Delete exam" onClick={ _e => deleteExamHandler(_e, id)}>
                        <FontAwesomeIcon
                            icon={ faTrash }
                            className={` w-7 lg:w-8 h-7 lg:h-8 transition-colors  ${ isDarkMode ? 'text-white' : 'text-[#333]'} `}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Row;
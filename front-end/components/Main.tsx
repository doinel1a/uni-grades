import { useState } from 'react';

import { Exam } from '../interfaces/Exam';
import { useStateContext } from '../contexts/ContextProvider';
import Paragraph from './HtmlElements/Paragraph';

import Numbers from '../utils/Numbers';
import Row from './Row';
import Modal from './Modal';

interface IProps {
    data: Exam[];
};

const Main: React.FC<IProps> = ({ data }) => {
    const { isDarkMode } = useStateContext();

    const [isEditRow, setIsEditRow] = useState<boolean>(false);

    let totPoints: number = 0;
    let totCredits: number = 0;
    let totGrades: number = 0;

    data.forEach( _data => {
        totPoints += (_data.credits * _data.grade);
        totCredits += _data.credits;
        totGrades += _data.grade;
    });

    const deleteExamHandler: Function = (_e: MouseEvent, _id: string) => {
        _e.preventDefault();
        <Modal />
        console.log(_id);
    };

    return(
        <main className='container h-full flex flex-col lg:flex-row px-1'>
            <section className={` container lg:w-[700px] h-1/4 lg:h-56 p-2 lg:p-4 mb-10 lg:mt-24 lg:mr-10 border-x-2 lg:border-2 rounded-b-xl lg:rounded-xl border-white transition-colors ${ isDarkMode ? 'bg-zinc-800' : 'bg-gray-300' } `}>
                <div className='flex justify-center items-center mb-4 rounded-lg font-semibold'>
                    <Paragraph 
                        text='Welcome'
                        customCss='mr-1 !text-2xl lg:!text-4xl'
                    />
                    <br />
                    <Paragraph 
                        text='Doinel Atanasiu'
                        customCss='ml-1 !text-2xl lg:!text-4xl'
                    />
                </div>
                <div className='flex rounded-lg'>
                    {/* STATIC AVAGRES */}
                    <div className='w-2/3 lg:w-3/4 flex flex-col gap-y-1 text-left'>
                        <Paragraph 
                            text='Arithmetic average of the exams'
                            customCss='lg:text-lg'
                        />
                        <Paragraph 
                            text='Weighted average of the exams'
                            customCss='lg:text-lg'
                        />
                        <Paragraph 
                            text='Arithmetic average of degree'
                            customCss='lg:text-lg'
                        />
                        <Paragraph 
                            text='Weighted average of degree'
                            customCss='lg:text-lg'
                        />
                    </div>

                    {/* DYNAMIC AVAGRES */}
                    <div className='w-1/3 lg:w-1/4 flex flex-col gap-y-1 text-right'>
                        <Paragraph 
                            text={`${ Numbers(totGrades / data.length, 3) } / 30`}
                            customCss='font-bold lg:text-lg'
                        />
                        <Paragraph 
                            text={`${ Numbers(totPoints / totCredits, 3) } / 30`}
                            customCss='font-bold lg:text-lg'
                        />
                        <Paragraph 
                            text={`${ Numbers(((totGrades / data.length) * 110) / 30, 3) } / 110`}
                            customCss='font-bold lg:text-lg'
                        />
                        <Paragraph 
                            text={`${ Numbers(((totPoints / totCredits) * 110) / 30, 3) } / 110`}
                            customCss='font-bold lg:text-lg'
                        />
                    </div>
                </div>
            </section>
            <section className='container lg:w-full h-3/4 lg:h-full lg:mt-10'>
                <div className='text-left mb-2 lg:mb-4'>
                    <Paragraph 
                        text='EXAMS:'
                        customCss='!text-2xl lg:!text-4xl'
                    />
                </div>
                <div className='w-full main-h flex flex-col gap-y-2 lg:gap-y-4 p-1 pr-2 lg:p-3 lg:pr-5 border-x-2 border-t-2 rounded-t-xl overflow-auto lg:overflow-hidden lg:hover:overflow-auto'>
                {
                    data.map( _data => (
                        <Row
                            key={ _data._id}
                            id={ _data._id}
                            subject={ _data.subject }
                            credits={ _data.credits }
                            grade={ _data.grade }
                            deleteExamHandler={ deleteExamHandler }
                        />
                    ))
                }
                </div>
            </section>
        </main>
    );
};

export default Main;
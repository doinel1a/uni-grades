import { FormEvent, useState } from 'react';

import { useStateContext } from '../contexts/ContextProvider';

import apis from '../utils/Api';

import Form from './Form';

const AddModal: React.FC = () => {
    const { isDarkMode, setIsAddExamModalVisible } = useStateContext();

    const [subject, setSubject] = useState<string>('');
    const [credits, setCredits] = useState<number>(0);
    const [grade, setGrade] = useState<number>(0);

    const insertExam: React.FormEventHandler<HTMLFormElement> = async (_e: FormEvent): Promise<void> => {
        _e.preventDefault();

        const payload = { subject, grade, credits };

        await apis.insertExam(payload);

        setIsAddExamModalVisible((_prevState: boolean) => !_prevState);
    };

    return(
        <section className={` w-full main-h absolute z-10 flex justify-center items-center bg-opacity-50 transition-colors ${ isDarkMode ? 'bg-gray-300' : 'bg-gray-900' } `}>
            <Form
                subject={ subject }
                setSubject={ setSubject }
                credits={ credits }
                setCredits={ setCredits }
                grade={ grade }
                setGrade={ setGrade }
                action={ insertExam }
                primaryButtonText='Insert'
                buttonSecondaryAction={ (_e) => { setIsAddExamModalVisible((_prevState: boolean) => !_prevState) } }
            />
        </section>
    );
};

export default AddModal;
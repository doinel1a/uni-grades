import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { Exam } from '../interfaces/Exam';
import { useStateContext } from '../contexts/ContextProvider';

import ButtonPrimary from '../components/HtmlElements/ButtonPrimary';
import ButtonSecondary from '../components/HtmlElements/ButtonSecondary';

import apis from '../utils/Api';
import Paragraph from '../components/HtmlElements/Paragraph';

interface IUpdateExamProps {
    success: boolean;
    data: Exam
};

const UpdateExam = ({ data }: { data: IUpdateExamProps }) => {
    const { isDarkMode } = useStateContext();
    const router = useRouter();

    const [_id, setId] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [credits, setCredits] = useState<number>(0);
    const [grade, setGrade] = useState<number>(0);

    useEffect( () => {
        setId(data.data._id);
        setSubject(data.data.subject);
        setCredits(data.data.credits);
        setGrade(data.data.grade);
    }, []);

    const updateExam: React.FormEventHandler<HTMLFormElement> = async (_e: FormEvent): Promise<void> => {
        _e.preventDefault();

        const payload = { _id, subject, grade, credits };

        await apis.updateExam(_id, payload)
        .then(
            () => {
                router.push('/');
            }
        );
    };

    return(
        <>
            <Head>
                <title>Uni Grades - Update { subject } Exam</title>

                <meta
                    name="description"
                    content="Doinel Atanasiu's Uni Grades"
                />
                <meta name="keywords" content="Uni Grades" />
                <meta name="author" content="Doinel Atanasiu" />
                <meta name="copyright" content="Doinel Atanasiu" />
                <meta name="robots" content="noindex, nofollow" />
                <meta name="rating" content="general" />

                {/* Open Graph */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@SITE" />
                <meta name="twitter:creator" content="@AtanasiuDoinel" />
                <meta name="twitter:title" content="Doinel Atanasiu — Uni Grades" />
                <meta
                    name="twitter:description"
                    content="Doinel Atanasiu's Uni Grades"
                />
                <meta
                    name="twitter:image"
                    content="IMAGE URL"
                />
                <meta property="og:url" content="URL" />
                <meta property="og:title" content="Doinel Atanasiu — Uni Grades" />
                <meta
                    property="og:description"
                    content="Doinel Atanasiu's Uni Grades"
                />
                <meta
                    property="og:image"
                    content="IMAGE URL"
                />

                {/* Manifest */}
                <link rel="manifest" href="/manifest.json"></link>
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="application-name" content="D1A — Uni Grades" />
                <meta name="apple-mobile-web-app-title" content="D1A — Uni Grades" />
                <meta name="theme-color" content="#0063EB" />
                <meta name="msapplication-navbutton-color" content="#0063EB" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="msapplication-starturl" content="/" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                {/* Favicon - Generics */}
                <link rel='icon' href='/favicon/favicon-32.png' sizes='32x32' />
                <link rel='icon' href='/favicon/favicon-57.png' sizes='57x57' />
                <link rel='icon' href='/favicon/favicon-76.png' sizes='76x76' />
                <link rel='icon' href='/favicon/favicon-96.png' sizes='96x96' />
                <link rel='icon' href='/favicon/favicon-128.png' sizes='128x128' />
                <link rel='icon' href='/favicon/favicon-192.png' sizes='192x192' />
                <link rel='icon' href='/favicon/favicon-228.png' sizes='228x228' />

                {/* Favicon - Android */}
                <link rel='shortcut icon' sizes='196x196' href='/favicon/favicon-196.png' />

                {/* Favicon - iOS */}
                <link rel='apple-touch-icon' href='/favicon/favicon-120.png' sizes='120x120' />
                <link rel='apple-touch-icon' href='/favicon/favicon-152.png' sizes='152x152' />
                <link rel='apple-touch-icon' href='/favicon/favicon-180.png' sizes='180x180' />
            </Head>

            <main className={` w-full main-h flex flex-col justify-center items-center ${ isDarkMode ? 'bg-zinc-700' : 'bg-gray-100' } `}>
                <section className='container h-full flex flex-col justify-center items-center gap-y-8 px-1'>
                    <Paragraph text="UPATE EXAMS'S DETAILS" customCss='!text-3xl text-center'/>
                    <form 
                        className={` w-80 lg:w-96 h-96 lg:h-96 flex flex-col justify-between p-4 rounded-xl ${ isDarkMode ? 'bg-zinc-800' : 'bg-gray-200' } `}
                        onSubmit={ _e => updateExam(_e) }
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
                                text='Update'
                                icon={ faCheck }
                                customCss='bg-green-600 hover:bg-green-700 focus:bg-green-700'
                            />
                            <ButtonSecondary 
                                text='Cancel'
                                onClick={ () => router.push('/') }
                            />
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
};

export default UpdateExam;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;
    const response = await fetch(`http://localhost:5007/api/exam/${ id }`);
    const data = await response.json();

    if(!response)
    {
        return {
            notFound: true
        };
    }

    return {
        props: {
            data
        }
    };
};
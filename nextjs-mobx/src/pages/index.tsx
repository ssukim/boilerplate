import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import Todo from '../components/Organisms/Todo';
import Layout from '../components/Templates/Layout';
import axios from 'axios';
import { TodoHydration } from '../stores/TodoStore';

export const getServerSideProps: GetServerSideProps = async () => {
    const hydrationData: TodoHydration[] = await axios
        .get('http://localhost:3000/api/todos')
        .then(function (response) {
            // handle success
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            throw new Error(error);
        });

    return {
        props: {
            hydrationData,
        },
    };
};

export default function Index({
    hydrationData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div>
            <Head>
                <title>Next.js Head {CMS_NAME}</title>
            </Head>
            <Layout>
                <Todo />
            </Layout>
        </div>
    );
}

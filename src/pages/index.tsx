import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Login } from '../modules/Login';

const HomePage: NextPage = () => {
  return (
    <Login />
  );
};


export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['login', 'header'])),
    },
  };
}

export default HomePage;

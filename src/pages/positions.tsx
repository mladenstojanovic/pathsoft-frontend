import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PositionPicker } from '../modules/PositionPicker';

const Positions: NextPage = () => {
  return <PositionPicker />;
};

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['positions', 'header'])),
    },
  };
}

export default Positions;

import Link from 'next/link';
import style from './style.module.css';
import RevalidateButton from './components/RevalidateButton';

export default async function Home() {
  return (
    <>
      <h1>Main</h1>
      <ul className={style.list}>
        <li>
          <Link href={'/Seoul?name=서울'}>서울</Link>
        </li>
        <li>
          <Link href={'/Singapore?name=싱카포르'}>싱카포르</Link>
        </li>
        <li>
          <Link href={'/Turkey?name=터키'}>터키</Link>
        </li>
      </ul>
      <RevalidateButton tag={'time'} />
    </>
  );
}

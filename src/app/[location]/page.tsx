import HomeButton from '../components/HomeButton';
import { getCurrentTiem } from '../utils/getTime';

type Props = {
  params: { location: string };
  searchParams: {
    name: string;
  };
};

export default async function Detail({ params, searchParams }: Props) {
  const city = params.location === 'Seoul' ? 'Asia/Seoul' : params.location;
  const time = await getCurrentTiem(city);
  const cityName = searchParams.name;

  console.log(time);

  return (
    <>
      <h1>도시 - {cityName}</h1>
      <h2>요일 - {time.dayOfWeek}</h2>
      <h2>
        시간 - {time.hour} : {time.minute} : {time.seconds}
      </h2>
      <HomeButton />
    </>
  );
}

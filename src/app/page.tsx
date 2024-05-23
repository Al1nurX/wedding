import Image from "next/image";
import Main from "../components/Main";
import flower from "../../public/images/flower.png";
import flowerSecond from "../../public/images/flowerSecond.png";
import calendar from "../../public/images/calendar.png";
import Attendance from "../components/Attendance";
import Date from "../components/Date";
import insta from "../../public/images/insta.png";
import gis from "../../public/images/gis.png";

export default function Home() {
  return (
    <div className="flex flex-col text-center ">
      <Main />
      <Image
        width={250}
        height={250}
        className="mx-auto mt-[-20px]"
        src={flower}
        alt="logo"
      />
      <div className="mt-[-150px] text-center text-xl leading-normal">
        <p>Құрметті ағайын-туыс</p>
        <p> бауырлар,</p>
        <p>құда-жекжат, нағашылар,</p>
        <p>бөле-жиендер,дос-жарандар, көршілер</p>
        <p>және әріптестер!</p>
      </div>
      <Image
        className="mx-auto mt-[-40px] mb-5"
        src={flowerSecond}
        alt="logo"
        width={100}
        height={100}
      />

      <div className="mt-[-50px] text-2xl text-center leading-normal">
        <p>Cіз(дер)ді ұлымыз</p>
        <h2 className="text-4xl">Жанибек</h2>
        <p>пен келініміз</p>
        <h2 className="text-4xl">Индираның</h2>
        <p>Үйлену тойына арналған</p>
        <p>Салтанатты ақ</p>
        <p>дастарханымыздың</p>
        <p>Қадірлі қонағы болуға</p>
        <p>шақырамыз</p>
      </div>
      <Image
        className="mx-auto mt-[-50px]"
        src={flowerSecond}
        alt="logo"
        width={140}
        height={140}
      />
      <div className="mt-[-50px] text-2xl leading-relaxed">
        <p>той салтанаты:</p>
        <p>22 маусым 2024 жыл</p>
        <p>сағат 18:00 БАСТАЛАДЫ</p>
      </div>

      <Image
        className="mt-10 mb-10 "
        height={200}
        width={400}
        src={calendar}
        alt="calendar"
      />
      <Image
        className="mx-auto mt-[-150px]"
        src={flowerSecond}
        alt="logo"
        width={150}
        height={150}
      />

      <div className="mt-[-50px] text-3xl leading-relaxed">
        <h2>Той иелері</h2>
        <h2>Қайырбек - Марал</h2>
      </div>

      <p className="mt-[50px] text-2xl">Тойға дейін</p>
      <Date />

      <div className="mt-20">
        <p>Мекен-жайымыз:</p>
        <p>Талдықорған қаласы</p>
        <p>Желтоқсан көшесі</p>
        <p>Дастархан</p>
        <p>Мейрамханасы</p>
      </div>

      <div className="flex justify-center gap-20 mt-10 mb-10">
        <Image className=" " height={30} width={80} src={gis} alt="gis" />
        <Image className=" " height={100} width={80} src={insta} alt="insta" />
      </div>

      <h2 className="mt-5 mb-5">Той хештегі</h2>
      <div className="text-center">
        <p>Ерер инстаграмм немесе басқа</p>
        <p>әлеуметтік желідерде</p>
        <p>бөлісеңіз,сіздерді осы хештегті</p>
        <p>қолдануды сұраймыз</p>
        <h3>#Жанибек_Индира</h3>
      </div>

      <h2 className="mt-20">Дресс код</h2>
      <div>
        <Image
          className="mt-10 mb-10 "
          height={40}
          width={40}
          src={calendar}
          alt="calendar"
        />
        <Image
          className="mt-10 mb-10 "
          height={40}
          width={40}
          src={calendar}
          alt="calendar"
        />
      </div>
      <Attendance />

      <h2>Мұратовтар әулетті </h2>
      <p>сіздерді күтеді</p>
    </div>
  );
}

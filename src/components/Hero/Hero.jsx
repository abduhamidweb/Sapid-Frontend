import "./hero.scss";
import Btn from '../Btn/Btn';
import heroImg from "../../assets/images/heroimg.png";
import Txth2 from '../Txth2/Txth2';
import Txth1 from '../Txth1/Txth1';
import Lorem from '../Lorem/Lorem';
const Hero = () => {
    return (
      <>
        <section className="hero">
          <div className="container">
            <div className="row hero-row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="hero-card animate__animated animate__fadeInLeft">
                  <Txth1 txt={"10% скидки на все бургеры!"} />
                  <Lorem
                    txt={`Общая сумма заказа должна быть больше или равна 70 000 сум. Предложение не распространяется на доставку. Акция "Товар дня" продлится до 31.12.2022. следите за предложениями!`}
                  />
                  <Btn txt={"В меню"} />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div
                  className="hero-img animate__animated animate__fadeInRight"
                  style={{ backgroundImage: `url(${heroImg})` }}
                >
                  <div className="hero-img-text">
                    <Txth1 txt={"10%"} />
                    <Txth2 txt={"скидка"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default Hero;
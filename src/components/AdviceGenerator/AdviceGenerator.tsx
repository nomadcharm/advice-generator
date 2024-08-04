import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { AdviceSlip, fetchAdvice } from "../../api/fetchAdvise";
import dice from "../../assets/icon-dice.svg";
import "./AdviceGenerator.scss";
import Loader from "../Loader/Loader";

const AdviceGenerator = () => {
  const [randomAdvice, setRandomAdvice] = useState<AdviceSlip | null>(null);

  const getRandomAdvice = async () => {
    const data: AdviceSlip = await fetchAdvice();
    setRandomAdvice(data);
  };

  useEffect(() => {
    getRandomAdvice();
  }, []);

  return (
    <div className="random-advice">
      {
        randomAdvice ? (
          <div className="random-advice__content">
            <p className="random-advice__id">Advice #{randomAdvice.slip.id}</p>
            <q>{randomAdvice.slip.advice}</q>
          </div>
        ) : <Loader />
      }
      <button className="random-advice__btn" onClick={() => getRandomAdvice()}>
        <ReactSVG src={dice} />
      </button>
    </div>
  );
};

export default AdviceGenerator;

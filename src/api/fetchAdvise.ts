type AdviceSlip = {
  slip: {
    id: number,
    advice: string,
  }
};

const fetchAdvice = async (): Promise<AdviceSlip> => {
  const data = await fetch(`https://api.adviceslip.com/advice`);
  return data.json();
};

export {
  type AdviceSlip,
  fetchAdvice,
};

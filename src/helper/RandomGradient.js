  const getRandomDarkColor = () => {
    const r = Math.floor(Math.random() * 128);
    const g = Math.floor(Math.random() * 128);
    const b = Math.floor(Math.random() * 128);
    return `rgb(${r}, ${g}, ${b})`;
  };

 export const randomGradient = () => {
    const color1 = getRandomDarkColor();
    const color2 = getRandomDarkColor();
    return `linear-gradient(45deg, ${color1}, ${color2})`;
  };

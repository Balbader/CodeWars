
const calculateDegrees = (nb, totNb) => {

  nb = Math.max(1, Math.min(nb, totNb));
  console.log(`nb: ${nb}`);

  const anglePerDivision = 360 / totNb;
  console.log(`anglePerDivision: ${anglePerDivision}`);

  const positionInDegrees = (nb - 1) * anglePerDivision;
  console.log(`positionInDegrees: ${positionInDegrees}\n`);

  return positionInDegrees;
}

const degreesOfLock = (initial, first, second, third) => {

  let position = 0;

  position += calculateDegrees(initial, 12);
  // console.log(`Position :  ${position}`);

  position += calculateDegrees(first, 12);
  // console.log(`Position :  ${position}`);

  position += calculateDegrees(second, 12);
  // console.log(`Position :  ${position}`);

  position += calculateDegrees(third, 12);
  // console.log(`Position :  ${position}`);

  return position;
}

let position = degreesOfLock(0, 30, 0, 30);
console.log(position);

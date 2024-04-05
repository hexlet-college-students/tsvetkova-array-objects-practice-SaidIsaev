// SOLUTIONS
const normalizeData = (content) => {
  return content.trim().split('\n').slice(1).map((str) => {
  const temp = str.split(';');
  const newStr = temp.map((elem) => Number(elem) || elem);
  return newStr;
});
};

const getHighRating = (data) => {
  return data.reduce((top, now) => top[2] < (now[2] + now[3]) ? [now[0], now[1], now[2] + now[3]] : top,  ['name', 'dev', 0]);
};

const getMaxIndia = (data) => {
  return data.reduce((mx, now) => Math.max(mx, now[6]), 0);
};

const getMinIndia = (data) => {
  return data.reduce((mn, now) => Math.min(mn, now[6]), Infinity);
};

// trim() - удалить лишнее 
// split() - превратить в массив
// map() - на основе старого создaет новый массив

// ANSWERS

// TASK 1
const tableParsing = (content) => {
  // step1
  const data = normalizeData(content);
  console.log(data);

  const topM = getHighRating(data);
  console.log(`General top messenger: ${topM[0]}, Owner: ${topM[1]}`); 

  // step2
  const [mx, mn] = [getMaxIndia(data), getMinIndia(data)];
  console.log(`Download count: Max count: ${mx}, Min count: ${mn}`);
};

// TASK 2
const candidateAssessment = (/* content */) => {

};

// TASK 3
const actorRating = (/* content */) => {

};

export { tableParsing, candidateAssessment, actorRating };

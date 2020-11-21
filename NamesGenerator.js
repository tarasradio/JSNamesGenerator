let maleNamesArray = [ "Миша", "Антон", "Ярослав", "Сергей" ];
let femaleNamesArray = [ "Маша", "Даша", "Аня", "Лена" ];

function GenerateMaleName()
{
  let nameIndex = randomInteger(0, maleNamesArray.length - 1);

  let resultName = document.getElementById("resultName");
  resultName.innerHTML = `Сгенерированное имя - ${maleNamesArray[nameIndex]}.`;
}

function GenerateFemaleName()
{
  let nameIndex = randomInteger(0, femaleNamesArray.length - 1);

  let resultName = document.getElementById("resultName");
  resultName.innerHTML = `Сгенерированное имя - ${femaleNamesArray[nameIndex]}.`;
}

function randomInteger(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let maleNamesArray = ["Миша", "Антон", "Ярослав", "Сергей", "Лёша", "Артём", "Вадим", "Валентин", "Валера", "Денис", "Герман", "Егор", "Виктор", "Глеб", "Вася", "Дима", "Матвей", "Павел", "Пётр", "Тимур", "Родион", "Олег",];
let femaleNamesArray = ["Маша", "Даша", "Аня", "Лена", "Кира", "Женя", "Настя", "", "Таня-Татьяна",  "Cвета-Светлана", "Катя-Екатерина", "Соня-София", "Наташа", "Полина", "", "", "", "Саша", "", "", "", "", "", "", "", "", "", ];

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
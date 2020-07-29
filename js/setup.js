
'use strict';
// Массивы с данными о магах
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

// Делаем окно видимым
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// Делаем видимым список похожих персонажей
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');


// Функция с выборкой рандомного значения
var getRandom = function (array) {
  return Math.floor(Math.random() * array.length);
};


// Массив с объектами

var wizards = [
  {
    name: WIZARD_NAMES[getRandom(WIZARD_NAMES)],
    surname: WIZARD_SURNAME[getRandom(WIZARD_SURNAME)],
    coatColor: WIZARD_COAT[getRandom(WIZARD_COAT)],
    eyesColor: WIZARD_EYES[getRandom(WIZARD_EYES)],
  },
  {
    name: WIZARD_NAMES[getRandom(WIZARD_NAMES)],
    surname: WIZARD_SURNAME[getRandom(WIZARD_SURNAME)],
    coatColor: WIZARD_COAT[getRandom(WIZARD_COAT)],
    eyesColor: WIZARD_EYES[getRandom(WIZARD_EYES)],
  },
  {
    name: WIZARD_NAMES[getRandom(WIZARD_NAMES)],
    surname: WIZARD_SURNAME[getRandom(WIZARD_SURNAME)],
    coatColor: WIZARD_COAT[getRandom(WIZARD_COAT)],
    eyesColor: WIZARD_EYES[getRandom(WIZARD_EYES)],
  },
  {
    name: WIZARD_NAMES[getRandom(WIZARD_NAMES)],
    surname: WIZARD_SURNAME[getRandom(WIZARD_SURNAME)],
    coatColor: WIZARD_COAT[getRandom(WIZARD_COAT)],
    eyesColor: WIZARD_EYES[getRandom(WIZARD_EYES)],
  }
];

// Функция для рендеринга магов
var renderWizard = function (wizard) {
  // Клонируем элемент
  var wizardElement = similarWizardTemplate.cloneNode(true);

  // Добавляем имя
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;

  // Добавляем данные о цвете
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  // Добавляем цвет глаз
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  // Добавляем элемент в список
  similarListElement.appendChild(wizardElement);
};

// Рендерим магов
for (var i = 0; i < 4; i++) {
  renderWizard(wizards[i]);
}


'use strict';
// Массив с именами магов
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];


// Делаем окно видимым
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// Делаем видимым список похожих персонажей
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

// Массив с объектами

var getRandom = function () {
  return Math.floor(Math.random() * WIZARD_NAMES.length);
};

var wizards = [
  {
    name: WIZARD_NAMES[getRandom()],
    surname: WIZARD_SURNAME[getRandom()],
    coatColor: 'rgb(241, 43, 107)'
  },
  {
    name: WIZARD_NAMES[getRandom()],
    surname: WIZARD_SURNAME[getRandom()],
    coatColor: 'rgb(241, 43, 107)'
  },
  {
    name: WIZARD_NAMES[getRandom()],
    surname: WIZARD_SURNAME[getRandom()],
    coatColor: 'rgb(241, 43, 107)'
  },
  {
    name: WIZARD_NAMES[getRandom()],
    surname: WIZARD_SURNAME[getRandom()],
    coatColor: 'rgb(241, 43, 107)'
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

  // Добавляем элемент в список
  similarListElement.appendChild(wizardElement);
};

// Рендерим магов
for (var i = 0; i < 4; i++) {
  renderWizard(wizards[i]);
}

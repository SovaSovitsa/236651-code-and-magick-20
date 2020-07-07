'use strict';

// Размеры облака
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

// Положение облака
var CLOUD_X = 100;
var CLOUD_Y = 10;

// Отступ
var GAP = 10;
var FONT_GAP = 16;

// Размеры полосы
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP - (FONT_GAP + GAP) * 3;

// Функция отрисовки облака
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Поиск максимального элемента
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

// Функция вывода статистики
window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.fillText('Ура! Вы победили!', CLOUD_X + CLOUD_WIDTH / 4, CLOUD_Y + FONT_GAP + GAP);
  ctx.fillText('Результаты:', CLOUD_X + CLOUD_WIDTH / 4, CLOUD_Y + GAP + FONT_GAP + GAP + GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + 80 + GAP + (20 + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    ctx.fillRect(CLOUD_X + 80 + GAP + (20 + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP - GAP - ((barHeight * times[i]) / maxTime) + GAP, BAR_WIDTH, (barHeight * times[i]) / maxTime);
  }
};

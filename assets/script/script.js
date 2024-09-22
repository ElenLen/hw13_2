"use strict";

// значание в поле даты
const dat = document.getElementById("bday");
const result = document.getElementById("result");

// при нажатии кнопки, подсчет кол-ва дней до др будущей
const btn = document.getElementById("button");
btn.addEventListener("click", function () {
  // выбранная дата в каендаре
  let futureDat = dat.value;
  console.log(futureDat);
  result.style.color = "black";

  if (futureDat === "") {
    result.style.color = "red";
    return (result.textContent = "Пожалуйста, введите дату рождения!");
  }

  // преобразуем в таймстамр
  let futureDatTime = Date.parse(futureDat);
  console.log(futureDatTime);

  // получаем текущий таймстап
  const nowTime = Date.now();
  console.log(nowTime);

  // рассчитываем разницу
  let cntDayTime = futureDatTime - nowTime;
  console.log(cntDayTime);

  // преобразуем результат
  const resDate = Math.floor(cntDayTime / (1000 * 60 * 60 * 24));

  // если разница в минусе, то ошибка
  if (resDate < 0) {
    result.style.color = "red";
    return (result.textContent =
      "Пожалуйста, введите дату рождения в будущем!");
  }

  let textDay = "";
  console.log(textDay);

  // склонение текста дней
  if (resDate === 1) {
    textDay = "день";
  } else if (resDate > 1 && resDate < 5) {
    textDay = "дня";
  } else {
    textDay = "дней";
  }

  console.log(textDay);

  // поле с результатом
  result.textContent = `До дня рождения осталось: ${resDate} ${textDay}.`;
});

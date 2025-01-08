// Скопировать скрипт в буфер обмена (можно прямо с этими комментариями)
// Открыть страницу линкдин со скилами, прокрутить внизу, чтобы ВСЕ скилы прогрузились, открыть DexTools (клавиша F12, или Command (⌘) + Option (⌥) + J) и вкладку Console. 
// Вставить скрипт, нажать Enter. Не сворачивать страницу и не уходить с нее, иначе скрипт замедлится или остановится.

function clickButtonsWithDelay(maxRetries = 3) {
  let index = 0; // Индекс текущей кнопки
  let retries = 0; // Счетчик повторных запусков

  function clickNextButton() {
    const buttons = Array.from(
      document.querySelectorAll("button span.artdeco-button__text")
    ).filter((button) => button.textContent.trim() === "Endorse");

    if (buttons.length === 0) {
      console.log("Все кнопки обработаны.");

      if (retries < maxRetries) {
        retries++; // Увеличиваем счетчик попыток
        console.log(
          `Повторный запуск скрипта для проверки оставшихся кнопок (попытка ${retries}).`
        );
        setTimeout(() => {
          clickButtonsWithDelay(maxRetries - retries); // Повторный запуск
        }, 2000);
      } else {
        console.log("Все скилы подтверждены. Скрипт завершен. АУФ...АУФ...АУФ");
      }
      return;
    }

    if (index >= buttons.length) {
      console.log("Все кнопки текущего прохода обработаны.");
      setTimeout(() => clickButtonsWithDelay(maxRetries - retries), 2000);
      return;
    }

    const button = buttons[index];
    button.parentElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    }); // Прокручиваем экран к кнопке
    button.parentElement.click(); // Клик по кнопке
    console.log(`Клик по кнопке ${index + 1}`);

    // Переход к следующей кнопке через 1 секунду
    setTimeout(() => {
      index++; // Переход к следующей кнопке
      clickNextButton(); // Запускаем клик для следующей кнопки
    }, 1000); // Задержка 1 секунда
  }

  clickNextButton(); // Запуск обработки первой кнопки
}

clickButtonsWithDelay(); // Запуск с 3 повторными проверками

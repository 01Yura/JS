// Скопировать скрипт в буфер обмена (можно прямо с этими комментариями)
// Открыть страницу линкдин со скилами (внизу скилов нажать Show all), прокрутить вниз страницы до конца, ЧТОБЫ ВСЕ СКИЛЫ ПРОГРУЗИЛИСЬ, открыть DexTools (клавиша F12, или Command (⌘) + Option (⌥) + J) и вкладку Console.
// Вставить скрипт, нажать Enter. Не сворачивать страницу и не уходить с нее, иначе скрипт замедлится или остановится.
// В процессе выполнения в консоли будут появляться предупреждения, или ошибки, это норм, как исправить не знаю, скрипт написал Chat GPT.
// За один проход обычно все кнопки не нажимаются, поэтому скрипт сделает 2-3 прохода. По окончанию появится сообщение : "Все скилы подтвержден..."

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
        console.log(
          "Все скилы подтверждены. Скрипт завершен. Вечер в хату, часок в радость, чифир в сладость. Всем волкам уважение и почёт! АУФ...АУФ...АУФ"
        );
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

// Ауф, я подвердил твои скилы через кнопку "Endorse", если будет время, подтверди и мои. Буду премного благодарен. Если лень нажимать, вот скрипт от для автоматизации данного процесса через браузер. Делись скриптом с другими волками.
// https://github.com/01Yura/JS/blob/c27d762a93dae16b66409c4c7f9f19bb96915ce7/Script_for_LinkedIn/script.js

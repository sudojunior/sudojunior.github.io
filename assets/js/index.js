/**
 * @param {HTMLElement} element
 * @param {string} text
 */
async function type(element, text, interval, delay) {
  text = decodeURIComponent(text);
  element.innerHTML = "";
  await waitAsync(delay);
  let index = 0;
  while (index <= text.length) {
    if (text[index] === '<') {
      let closeIndex = text.indexOf('>', index);
      element.innerHTML = text.slice(0, closeIndex);
      index += closeIndex - index;
      continue;
    }

    element.innerHTML = text.slice(0, index++);
    await waitAsync(interval);
  }
}

/**
 * @param {number} [time=1000] time to wait (defaults to 1 second)
 * @returns {Promise<void>}
 */
function waitAsync(time = 1000) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function runCommand(event, $el) {
  event.preventDefault();
  const index = commands.findIndex(cmd => cmd.trigger === $el.text());
  let $new;
  if (index > -1) {
    try {
      $new = $("li").html(commands[index].exec());
    } catch (e) {
      $new = $("li").html(commands[index].exec.replace("\n", "<br/>"));
    }
  } else {
    $new = $("li").html("<span style='color: red;'>Command <b>" + $el.text() + "</b> was not found.</span>");
  }
  $(".history").append($new);
  $el.text("");
}

document.onreadystatechange = async (e) => {
  e.preventDefault();
  let cmdElements = document.getElementsByClassName("cmd");

  for (let i = 0; i < cmdElements.length; i++) {
    let el = cmdElements[i];
    type(el,
      el.getAttribute("data-cmd") || el.innerHTML,
      parseFloat(el.getAttribute("data-interval")) || 100,
      parseFloat((el.getAttribute("data-delay")) || 0) + i * 500);
  }
};
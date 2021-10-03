let CSS, interval;

const removeUnneededDates = () => {
  const children = [...document.querySelector('.mx_RoomView_MessageList').children];

  for (const el of document.querySelectorAll('.mx_RoomView_MessageList li:not([class])')) {
    let ind = children.indexOf(el) + 1;

    while (true) {
      if (!children[ind] || children[ind].className === '') {
        el.style.display = 'none';
        break;
      }

      if (children[ind].className !== 'mx_EventListSummary' && children[ind].className !== '') break;

      ind++;
    }
  }
};

export const load = async () => {
  CSS = await import(`https://standard.polymod.dev/css.js?_${Date.now()}`);

  CSS.add(`.mx_EventListSummary {
    display: none;
  }`);

  interval = setInterval(removeUnneededDates, 500);
  removeUnneededDates();
};

export const unload = () => {
  clearInterval(interval);
  CSS.remove();

  document.querySelectorAll('.mx_RoomView_MessageList li:not([class])').forEach((x) => x.style.display = '');
};
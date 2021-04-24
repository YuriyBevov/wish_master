function toggleElem(el, cl) {
  el.classList.toggle(cl);
};

function removeClass(el,cl) {
  el.classList.remove(cl);
};

function addClass(el,cl) {
  el.classList.add(cl);
};

function checkToAddClass(el, cl) {
  if(!el.classList.contains(cl)) {
    el.classList.add(cl);
  }
};

function checkToRemoveClass(el, cl) {
  if(el.classList.contains(cl)) {
    el.classList.remove(cl);
  }
};

function test() {
  console.log('test')
};

export {
  test,
  toggleElem,
  removeClass,
  addClass,
  checkToAddClass,
  checkToRemoveClass
};

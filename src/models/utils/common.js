export const COMMON_isVisibile = elm => {
  if (!elm) return false;
  let rect = elm.getBoundingClientRect();
  let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

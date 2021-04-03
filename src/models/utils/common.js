export const COMMON_isVisibile = elm => {

  if (!elm) return false;

  let rect = elm.getBoundingClientRect();
  let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

export const deepCopy = (obj) => {
  if(obj === null) return null
  if(typeof(obj) !== 'object') return obj

  let newObj = Array.isArray(obj) ? [...obj] : {...obj}
  for( let key in newObj){
    newObj[key] = deepCopy(newObj[key])
  }

  return newObj
}

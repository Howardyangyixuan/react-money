const idString = window.localStorage.getItem('id');
let id = idString ? parseInt(idString)  : 4;
window.localStorage.setItem('id', JSON.stringify(id));
const createId = () => {
  id += 1;
  window.localStorage.setItem('id', JSON.stringify(id));
  return id;
};
export {createId};
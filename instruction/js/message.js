const showAlert = (msg) => {
  alert(msg);
};

const showConfirm = (msg) => {
  return confirm(msg);
};


export default showAlert; //bir tane default edilir
export { showConfirm };

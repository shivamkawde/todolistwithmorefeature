export function insertData(obj) {
  return {
    type: "insertData",
    payload: obj,
  };
}
export function showData() {
  return {
    type: "showData",
  };
}

export function removeData(sno) {
  return {
    type: "removeData",
    sno: sno,
  };
}

export function completeTask(sno) {
  return {
    type: "completeTask",
    sno: sno,
  };
}

export function editTask(sno, content) {
  return {
    type: "editTask",
    sno: sno,
    content: content,
  };
}

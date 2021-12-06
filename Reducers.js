export const instData = (state = {}, action) => {
  switch (action.type) {
    case "insertData":
      let arr = [];
      console.log(action);
      console.log(state);
      console.log(action.payload);
      if (Object.keys(state).length !== 0) {
        console.log("dhjdfnjhjhdfjhhjå");
        console.log(state);
        let newState = [...state];
        newState.push(action.payload);
        return newState;
      } else {
        arr.push(action.payload);
        return arr;
      }
    case "removeData":
      let temp = [];
      for (let i = 0; i < state.length; i++) {
        if (action.sno != state[i].sno) temp.push(state[i]);
      }
      return (state = temp);

    case "completeTask":
      let tempArr = [];
      console.log(action);
      for (let i = 0; i < state.length; i++) {
        if (action.sno == state[i].sno) {
          if (state[i].check == null) state[i].check = true;
          else if (state[i].check == true) state[i].check = null;
        }
        tempArr.push(state[i]);
      }
      return (state = tempArr);

    case "editTask":
      let temEdit = [];
      for (let i = 0; i < state.length; i++) {
        if (action.sno == state[i].sno) {
          state[i].content = action.content;
        }
        temEdit.push(state[i]);
      }
      return (state = temEdit);

    default:
      return state;
  }
};

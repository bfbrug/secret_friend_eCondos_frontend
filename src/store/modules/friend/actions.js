export function addRequest(name, email) {
  // alert(email);
  return {
    type: '@friend/ADD_REQUEST',
    payload: { name, email },
  };
}

export function addSucess(friend) {
  return {
    type: '@friend/ADD_SUCESS',
    payload: { friend },
  };
}

export function addFailure() {
  return {
    type: '@friend/ADD_FAILURE',
  };
}

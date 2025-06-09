export function getUserData() {

  const URL = "https://playground.4geeks.com/todo/users/Marc";

  return (
    fetch(URL)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        return data.todos;
      })
      .catch(error => {
        console.log(error);
      }))};
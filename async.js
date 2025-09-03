async function fetchUsers() {
  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if (!res.ok) {
      throw new Error("Нет такого поста");
    }

    let data = await res.json();
    data.forEach((user) => {
        console.log(user.name)
    })
    console.log(dataView(users))
  } catch (e) {
    console.log(e.message, "Отработал блок catch");
  }
}

fetchUsers();

setTimeout()
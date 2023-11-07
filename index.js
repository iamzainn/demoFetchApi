//getUsers

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>{
    return res.json()
})
.then(users=>{
    console.log(users)
})

//getUser single


fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(res=>{
    return res.json()
})
.then(users=>{
    console.log(users)
})

// post User

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json',
  },
})
  .then(response => response.json())
  .then((newUser) => console.log(newUser));
  

//PUT METHOD


  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 10,
    title: 'New And update post',
    body: 'bar1',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json',
  },
})
  .then(response => response.json())
  .then((updateUser) => console.log(updateUser));

  
  //DELETE

  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });

export function getBooksAPI() {
  return fetch("https://deploy-1e4r.onrender.com/books")
    .then((res) => res.json())
    .then((data) => data);
}

export function addBookAPI(book) {
  try {
    return fetch("https://deploy-1e4r.onrender.com/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => data);
  } catch (err) {
    console.log(err);
  }
}

export function updateBookAPI(book) {
  return fetch("https://deploy-1e4r.onrender.com/books" + book._id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  })
    .then((res) => res.json())
    .then((data) => data);
}

export function deleteBookAPI(id) {
  return fetch(`https://deploy-1e4r.onrender.com/books/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data);
}

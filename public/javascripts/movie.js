document.addEventListener("DOMContentLoaded", async () => {
  const watchedButton = document.getElementById('watched')
  const movieIdInput = document.getElementById('movieId')
  const span = document.getElementById('watchedSpan')
  watchedButton.addEventListener('submit', async (event) => {
    event.preventDefault()
    // console.log('---------TEST------------')

    const body = {
      movieId: movieIdInput.value
    }

    if (span.innerHTML = 'Unwatched') {
      const res = await fetch(`http//localhost:8080/movies/${movieIdInput.value}`, {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }).then(res => {
        span.innerHTML = 'Watched'
        res.json()
      })
    }
  } else if (span.innerHTML = 'Watched') {
    // console.log('TEST DELETE')
    const res = await fetch(`http//localhost:8080/movies/${movieIdInput.value}`, {

      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(res => {
      span.innerHTML = 'Unwatched'
      res.json()
    })
  }


})






















})

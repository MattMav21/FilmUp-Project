document.addEventListener("DOMContentLoaded", async () => {
  const watchedButton = document.getElementById('watched')
  const movieIdInput = document.getElementById('movieId')
  const span = document.getElementById('watchedSpan')
  watchedButton.addEventListener('submit', async (event) => {
    event.preventDefault()

    const body = {
      movieId: movieIdInput.value
    }

    const res = await fetch(`http//localhost:8080/movies/${movieIdInput.value}`, {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(res => {
      span.innerHTML = 'Watched'
      res.json()
    })
  })






















})

document.addEventListener("DOMContentLoaded", async () => {

  const watchedButton = document.getElementById('watched')

  watchedButton.addEventListener('click', async (event) => {
    const span = document.getElementById('buttonSpan')

    if (span.innerHTML === 'Unwatched') {
      return span.innerHTML = 'Watched'
    } else {
      return span.innerHTML = 'Unwatched'
    }

  })




















})

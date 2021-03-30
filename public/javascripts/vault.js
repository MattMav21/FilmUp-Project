const handleDelete = (vaultId, movieId) => {
    const movieContainer = document.querySelector(".movieContainer")
    return async () => {
        try {
            const res = await fetch(`/vaults/${vaultId}`, {
                method: "DELETE",
                body: JSON.stringify({
                    movieId: movieId
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!res.ok) {
                throw res
            }
            const movieVar = document.querySelector(`#movieBlock-${movieId}`)
            movieContainer.removeChild(movieVar)
        } catch (err) {
            console.error(err)
        }
    }
}


document.addEventListener("DOMContentLoaded", async () => {
    const deleteButtons = document.querySelectorAll("#delete-movie");

    if (deleteButtons) {
        deleteButtons.forEach((button) => {
            button.addEventListener("click", handleDelete(button.dataset.vaultid, button.dataset.movieid));
  });
}
})
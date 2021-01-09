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
            console.log(movieVar)
            movieContainer.removeChild(movieVar)
            // document.querySelector(`.movieBlock-${movieId}`).remove()
        } catch (err) {
            console.error(err)
        }
    }
}


document.addEventListener("DOMContentLoaded", async () => {
    // const deleteButton = document.getElementById("delete-movie")

    // deleteButton.addEventListener("click", async (event) => {
    //     console.log(event)
    //     handleDelete(event.target.id)

    // })
    const deleteButtons = document.querySelectorAll("#delete-movie");

    if (deleteButtons) {
        deleteButtons.forEach((button) => {
            console.log(button.dataset.vaultid)
            button.addEventListener("click", handleDelete(button.dataset.vaultid, button.dataset.movieid));
  });
}
})
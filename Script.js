function addReview() {
    let title = document.getElementById("bookTitle").value;
    let review = document.getElementById("bookReview").value;

    if (title.trim() === "" || review.trim() === "") {
        alert("Please enter both book title and review.");
        return;
    }

    let reviewList = document.getElementById("reviewList");
    let listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${title}</strong>: ${review}`;
    reviewList.appendChild(listItem);

    // Clear input fields
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookReview").value = "";
}

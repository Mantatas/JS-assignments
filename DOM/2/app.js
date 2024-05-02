document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsContainer = document.getElementById('reviews');

    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const review = document.getElementById('review').value;
        
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review');
        reviewItem.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Review:</strong> ${review}</p>
        `;
        
        reviewsContainer.appendChild(reviewItem);
        
    });
});
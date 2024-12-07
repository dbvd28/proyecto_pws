let selectedRating = 0;
let commentCount = 0;  


function setRating(rating) {
    selectedRating = rating; 
    const stars = document.querySelectorAll('.review-form .star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

function submitReview() {
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const formError = document.getElementById('form-error');
    
    
    if (!name || !comment || selectedRating === 0) {
        formError.textContent = 'Por favor, completa todos los campos y selecciona una calificación.';
        return;
    }

    
    commentCount++;

    
    const avatarNumber = (commentCount % 7) + 1; 
    const avatarImage = `IMAGES/AVATAR/avatar${avatarNumber}.png`;  

    
    const commentContainer = document.getElementById('comments-container');
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    
   
    const commentHeader = document.createElement('div');
    commentHeader.classList.add('comment-header');
    
    const avatar = document.createElement('img');
    avatar.src = avatarImage;
    avatar.alt = 'Avatar';
    avatar.classList.add('avatar');
    
    const nameElement = document.createElement('h3');
    nameElement.textContent = name;
    
   
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars');

    for (let i = 0; i < selectedRating; i++) {
        const star = document.createElement('span');
        star.classList.add('star', 'selected');
        star.textContent = '★';
        starsContainer.appendChild(star);
    }

    
    for (let i = selectedRating; i < 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.textContent = '★';
        starsContainer.appendChild(star);
    }

    commentHeader.appendChild(avatar);
    commentHeader.appendChild(nameElement);
    commentHeader.appendChild(starsContainer);
    newComment.appendChild(commentHeader);
    
   
    const commentText = document.createElement('p');
    commentText.textContent = comment;
    newComment.appendChild(commentText);
    
    
    commentContainer.appendChild(newComment);
    
    
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
    setRating(0);  
    formError.textContent = '';  
}
 

document.getElementById('tweetForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var tweetInput = document.getElementById('tweetInput');
    var tweetText = tweetInput.value;
    tweetInput.value = '';

    var tweet = document.createElement('div');
    tweet.className = 'tweet';
    tweet.innerHTML = `
        <p>${tweetText}</p>
        <span class="like">Like</span>
        <span class="comment">Comment</span>
        <span class="delete">Delete</span>
    `;

    tweet.querySelector('.like').addEventListener('click', function() {
        this.style.color = this.style.color === 'red' ? 'blue' : 'red';
    });

    tweet.querySelector('.comment').addEventListener('click', function() {
        var comment = prompt('Enter your comment:');
        var commentElement = document.createElement('p');
        commentElement.textContent = comment;
        tweet.appendChild(commentElement);
    });

    tweet.querySelector('.delete').addEventListener('click', function() {
        tweet.remove();
    });

    document.getElementById('tweetsContainer').appendChild(tweet);
}); 
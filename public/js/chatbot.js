document.getElementById('chatbot').addEventListener('click', function() {
    var popup = document.getElementById('popup');
    popup.classList.toggle('open'); 

    document.getElementById('close').addEventListener('click', function() {
        popup.classList.remove('open');
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.classList.remove('open');
        }
    });


});

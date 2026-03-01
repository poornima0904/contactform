// Contact Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Reset errors
        document.querySelectorAll('.error').forEach(el => el.style.display = 'none');

        // Name validation
        const name = document.getElementById('name').value.trim();
        if (name === '') {
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        }

        // Email validation using regex
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || !emailRegex.test(email)) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        }

        // Message validation
        const message = document.getElementById('message').value.trim();
        if (message === '') {
            document.getElementById('messageError').style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully! (Demo)');
            this.reset();
        }
    });

    // To-Do List functionality
    const todoInput = document.getElementById('todoInput');
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

// Dynamic To-Do List Functions
function addTask() {
    const input = document.getElementById('todoInput');
    const taskText = input.value.trim();
    if (taskText === '') return;

    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        todoList.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    input.value = '';
}

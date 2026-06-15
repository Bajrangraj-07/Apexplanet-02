// ---- HAMBURGER MENU ----
function toggleMenu() {
    var links = document.querySelector('.nav-links');
    links.classList.toggle('open');
}

// ---- TO-DO LIST ----
function addTask() {
    var input = document.getElementById('todoInput');
    var taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task first!');
        return;
    }

    var list = document.getElementById('taskList');

    var li = document.createElement('li');
    li.innerHTML = '<span onclick="markDone(this)">' + taskText + '</span><button class="delete-btn" onclick="removeTask(this)">✕</button>';

    list.appendChild(li);
    input.value = '';
}

function removeTask(btn) {
    var li = btn.parentElement;
    li.remove();
}

function markDone(span) {
    span.classList.toggle('done');
}

// press Enter to add task
document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// ---- FORM VALIDATION ----
function validateForm(e) {
    e.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();

    var isValid = true;

    // clear old errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('subjectError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('successMsg').textContent = '';

    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }

    if (subject === '') {
        document.getElementById('subjectError').textContent = 'Subject is required';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = 'Message cannot be empty';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('successMsg').textContent = '✅ Message sent successfully! I will get back to you soon.';
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';
    }
}

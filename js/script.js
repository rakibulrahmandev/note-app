//? note app ----------------------------------------------------------------->

// get html element ------------------------------------>
const noteContainer = document.getElementById('note-container');
const createBtn = document.getElementById('create-btn');

// create modular function ----------------------------->
const displayNote = () => {
    const noteFromStorage = localStorage.getItem('notes');
    if (noteFromStorage) {
        noteContainer.innerHTML = noteFromStorage;
    };
};

const saveNotes = () => {
    localStorage.setItem('notes', noteContainer.innerHTML);
};

const createNote = () => {
    const noteContent = document.createElement('div');
    const noteBox = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const icon = document.createElement('i');
    
    noteContent.className = 'w-full h-[150px] bg-slate-700 py-3 pl-3 pr-[7px] rounded-md overflow-y-scroll overflow-x-hidden text-white transition-all ease-linear duration-1000 relative group';
    noteBox.className = 'note-box w-full h-full border-none outline-none';
    deleteBtn.className = 'py-2 px-3 rounded-md absolute bottom-3 right-3 cursor-pointer bg-emerald-700 hidden transition-all ease-linear duration-1000 group-hover:block';
    icon.className = 'ri-delete-bin-6-line text-white text-xl pointer-events-none';

    noteBox.setAttribute('contenteditable', 'true');

    noteBox.addEventListener('keyup', saveNotes);

    noteContent.appendChild(noteBox);
    noteContent.appendChild(deleteBtn).appendChild(icon);

    noteContainer.appendChild(noteContent);

    saveNotes();
};

const deleteNote = (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
        saveNotes();
    };
};

// create event listener ------------------------------->
createBtn.addEventListener('click', createNote);
noteContainer.addEventListener('click', deleteNote);

// function call here ---------------------------------->
displayNote();
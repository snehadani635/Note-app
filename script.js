let notes = JSON.parse(localStorage.getItem("notes")) || [];

showNotes();

function addNote(){

    let noteInput = document.getElementById("noteInput");

    let noteText = noteInput.value;

    if(noteText === ""){
        alert("Please write a note");
        return;
    }

    notes.push(noteText);

    localStorage.setItem("notes", JSON.stringify(notes));

    noteInput.value = "";

    showNotes();
}

function showNotes(){

    let notesDiv = document.getElementById("notes");

    notesDiv.innerHTML = "";

    for(let i = 0; i < notes.length; i++){

        notesDiv.innerHTML += `
            <div class="note">
                <p>${notes[i]}</p>
                <button onclick="deleteNote(${i})">Delete</button>
            </div>
        `;
    }
}

function deleteNote(index){

    notes.splice(index,1);

    localStorage.setItem("notes", JSON.stringify(notes));

    showNotes();
}
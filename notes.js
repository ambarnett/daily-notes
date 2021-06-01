const notes = [
    {
        id: 1,
        subject: "how to better link JS to HTML and CSS",
        date: 20210527,
        feeling: "Frusterated",
        timeSpent: 120
    },
    {
        id: 2,
        subject: "practice creating objects in JS",
        date: 20210527,
        feeling: "Good",
        timeSpent: 30
    }
]

const noteAboutToday = {
    id: 3,
    subject: "more practice with JS",
    date: 20210528,
    feeling: "Good",
    timeSpent: 300
}

notes.push(noteAboutToday)

const searchTerm = "Good"

const createNote = (note) => {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1

    note.id = idForNewNote
    notes.push(note)
}

const time = new Date().getTime()
const date = new Date(time)

const moreNewerNote = {
    subject: "more more more practice with JS",
    date: date.toString(),
    feeling: "I hate my allergies",
    timeSpent: 200
}

createNote(moreNewerNote)

for (const note of notes){
    // if(note.feeling === searchTerm){
        console.log(`Note #${note.id}
        ${note.subject}
        The date the note was taken: ${note.date}
        How I was feeling after: ${note.feeling}
        How long I was working on the subject of the note: ${note.timeSpent} minutes
        ---------------------------------------`)
    // }
}
import { db, doc, setDoc } from '../firebase.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('uploadMarksForm').addEventListener('submit', async function(e) {
        e.preventDefault(); // Form ki default action ko roke

        const course = document.getElementById('course').value;
        const studentId = document.getElementById('studentId').value;
        const marks = document.getElementById('marks').value;
        const totalMarks = document.getElementById('totalMarks').value;
        const grade = document.getElementById('grade').value;

        try {
            await setDoc(doc(db, 'studentMarks', studentId), {
                course: course,
                marks: marks,
                totalMarks: totalMarks,
                grade: grade
            });
            alert('Marks uploaded successfully!');
            document.getElementById('uploadMarksForm').reset();
        } catch (error) {
            console.error('Error uploading marks: ', error);
        }
    });
});

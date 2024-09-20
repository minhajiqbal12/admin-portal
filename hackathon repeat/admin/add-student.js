import { db, setDoc, doc } from '../firebase.js'; // Import Firestore from your config

document.addEventListener('DOMContentLoaded', () => {
    const addStudentForm = document.getElementById('addStudentForm');
    
    if (addStudentForm) {
        addStudentForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Get form values
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const cnic = document.getElementById('cnic').value;

            // Reference to Firestore
            const studentId = `${cnic}_${Date.now()}`; // Create unique student ID using CNIC and timestamp
            const studentRef = doc(db, 'students', studentId);

            // Create student object
            const studentData = {
                firstName,
                lastName,
                email,
                password,
                cnic,
                createdAt: new Date()
            };

            try {
                // Save student data to Firestore
                await setDoc(studentRef, studentData);
                document.getElementById('message').textContent = 'Student added successfully!';
                addStudentForm.reset(); // Clear the form
            } catch (error) {
                console.error('Error adding student: ', error);
                document.getElementById('message').textContent = 'Error adding student. Please try again.';
            }
        });
    } else {
        console.error('Add student form not found');
    }
});

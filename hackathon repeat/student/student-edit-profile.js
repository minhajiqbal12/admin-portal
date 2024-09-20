import { db, doc, setDoc, getDoc } from '../firebase.js';

const studentId = 'someStudentId'; // Replace with actual student ID

// Load student data
async function loadStudentData() {
    const docRef = doc(db, 'students', studentId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        const data = docSnap.data();
        document.getElementById('firstName').value = data.firstName;
        document.getElementById('lastName').value = data.lastName;
        document.getElementById('cnic').value = data.cnic;
    } else {
        console.error('No such document!');
    }
}

// Update student profile
document.getElementById('editProfileForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Form ki default action ko roke

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const cnic = document.getElementById('cnic').value;

    try {
        await setDoc(doc(db, 'students', studentId), {
            firstName: firstName,
            lastName: lastName,
            cnic: cnic
        }, { merge: true }); // Merging data instead of overwriting
        alert('Profile updated successfully!');
    } catch (error) {
        console.error('Error updating profile: ', error);
    }
});

// Call loadStudentData to populate the form
loadStudentData();

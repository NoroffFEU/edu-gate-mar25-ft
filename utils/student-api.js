export async function getStudents() {
    try {
        const response = await fetch('/Data/Students.json');
        const data = await response.json();
        return data.users;
    } catch (error) {
        console.error('Error fetching students:', error);
        return null;
    }
}

export async function getStudentById(id) {
    try {
        const students = await getStudents();
        return students.find(student => student.id === id);
    } catch (error) {
        console.error('Error fetching student by ID:', error);
        return null;
    }
}


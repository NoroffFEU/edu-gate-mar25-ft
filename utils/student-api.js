export async function getStudents(page = 1, limit = 10) {
    try {
        const response = await fetch('/Data/Students.json');
        const data = await response.json();

        const totalCount = data.students.length;
        const totalPages = Math.ceil(totalCount / limit);

        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedStudents = data.students.slice(startIndex, endIndex);

        return {
            items: paginatedStudents,
            totalCount,
            totalPages,
            pageNumber: page,
            pageSize: limit,
        };

    } catch (error) {
        console.error('Error fetching students:', error);
        return null;
    }
}

export async function getSubjectsByStudentId({ studentId, page = 1, limit = 7 }) {
    try {
        const response = await fetch('/Data/Results.json');
        const data = await response.json();

        console.log('All results:', data.results);
        console.log('Looking for studentId:', studentId);

        const studentResults = data.results.filter(result => result.studentId === studentId);
        console.log('Filtered studentResults:', studentResults);
        
        if (studentResults.length === 0) {
            console.log('No results found for student:', studentId);
            return null;
        }
        
        const flatMap = studentResults.flatMap(result => 
            result.subjects.map(subject => ({
                year: result.session,
                term: result.term,
                ...subject
            }))
        );

        const totalCount = flatMap.length;
        const totalPages = Math.ceil(totalCount / limit);

        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedSubjects = flatMap.slice(startIndex, endIndex);

        return {
            studentId,
            items: paginatedSubjects,
            totalCount,
            totalPages,
            pageNumber: page,
            pageSize: limit,
        };

                
    } catch (error) {
        console.error('Error fetching subjects by student ID:', error);
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


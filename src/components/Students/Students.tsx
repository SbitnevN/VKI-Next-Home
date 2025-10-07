'use client';

import useStudents from '@/hooks/useStudents';
import type StudentInterface from '@/types/StudentInterface';
import styles from './Students.module.scss';
import Student from './Student/Student';
import StudentForm from './AddStudent/AddStudentForm';

const Students = (): React.ReactElement => {
  const { students, deleteStudentMutate, addStudentMutate } = useStudents();

  const handleAddStudent = (studentData: StudentInterface) => {
    addStudentMutate(studentData);
  };

  const onDeleteHandler = (studentId: number): void => {
    if (confirm('Удалить студента?')) {
      deleteStudentMutate(studentId);
    }
  };

  return (
    <div className={styles.Students}>
      <StudentForm addStudent={handleAddStudent} />
      {students.map((student: StudentInterface) => (
        <Student
          key={student.id}
          student={student}
          onDelete={onDeleteHandler}
        />
      ))}
    </div>
  );
};

export default Students;

import { useForm, type SubmitHandler } from 'react-hook-form';
import type StudentInterface from '@/types/StudentInterface';

interface AddStudentFormProps {
  addStudent: (data: StudentInterface) => void;
}

const AddStudentForm = ({ addStudent }: AddStudentFormProps): React.ReactElement => {
  const { register, handleSubmit, reset } = useForm<StudentInterface>();

  const onSubmit: SubmitHandler<StudentInterface> = (data: StudentInterface) => {
    addStudent(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName', { required: true })} placeholder="Имя" />
      <input {...register('middleName', { required: true })} placeholder="Фамилия" />
      <input {...register('lastName', { required: true })} placeholder="Отчество" />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddStudentForm;

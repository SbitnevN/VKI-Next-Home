import { addStudentDb } from '@/db/studentDb';
import type StudentInterface from '@/types/StudentInterface';
import { type NextRequest } from 'next/server';

export async function POST(request: NextRequest): Promise<Response> {
  const student: StudentInterface = await request.json();
  const newStudentId: number = await addStudentDb(student);
  const newStudent: StudentInterface = {
    ...student,
    id: newStudentId,
  };

  return new Response(JSON.stringify(newStudent), {
    headers: { 'Content-Type': 'application/json' },
  });
}

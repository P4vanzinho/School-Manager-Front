import dynamic from "next/dynamic";

const TeacherForm = dynamic(() => import("../components/forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("../components/forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});

export const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};

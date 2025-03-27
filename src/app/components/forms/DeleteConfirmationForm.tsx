"use client";

import { DeleteConfirmationFormProps } from "../types/form";

const DeleteConfirmationForm = ({ table, id }: DeleteConfirmationFormProps) => {
  if (!id) {
    return null;
  }

  return (
    <form action="" className="p-4 flex flex-col gap-4">
      <span className="text-center font-medium">
        Todos os dados serão perdidos. Tem certeza de que deseja excluir este{" "}
        {table}?
      </span>
      <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
        Delete
      </button>
    </form>
  );
};

export default DeleteConfirmationForm;

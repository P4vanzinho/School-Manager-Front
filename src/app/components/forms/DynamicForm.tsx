"use client";

import { forms } from "@/app/constants/forms";
import DeleteConfirmationForm from "./DeleteConfirmationForm";
import { DynamicFormProps } from "../types/form";

const DynamicForm = ({ type, table, data, id }: DynamicFormProps) => {
  if (type === "delete") {
    return <DeleteConfirmationForm table={table} id={id} />;
  }

  if (type === "create" || type === "update") {
    return forms[table](type, data);
  }

  return "Form not found!";
};

export default DynamicForm;

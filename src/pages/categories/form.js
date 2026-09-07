import React from "react";
import { Form } from "react-bootstrap";
import SButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";

export default function CategoriesForm({
  handleChange,
  form,
  handleSubmit,
  isLoading,
  edit,
}) {
  return (
    <Form>
      <TextInputWithLabel
        label={"Nama Kategori"}
        value={form.name}
        placeholder={"Masukkan Nama Kategori"}
        onChange={handleChange}
        type="text"
        name="name"
      />
      <SButton variant="primary" action={handleSubmit} loading={isLoading}>
        {edit ? "Edit" : "Simpan"}
      </SButton>
    </Form>
  );
}

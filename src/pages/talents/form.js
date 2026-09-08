import React from "react";
import { Figure, Form } from "react-bootstrap";
import SButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import { config } from "../../configs";

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
        label={"Nama Talents"}
        value={form.name}
        placeholder={"Masukkan Nama Talents"}
        onChange={handleChange}
        type="text"
        name="name"
      />
      <TextInputWithLabel
        label={"Nama Role"}
        value={form.role}
        placeholder={"Masukkan Nama Role"}
        onChange={handleChange}
        type="text"
        name="role"
      />
      <TextInputWithLabel
        placeholder={"Masukan Avatar"}
        label={"Avatar"}
        name="avatar"
        // value={form.avatar}
        type="file"
        onChange={handleChange}
      />

      {form.avatar !== "" && (
        <div>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={`${config.api_image}/${form.avatar}`}
            />

            <Figure.Caption>Perview image avatar</Figure.Caption>
          </Figure>
        </div>
      )}
      <SButton variant="primary" action={handleSubmit} loading={isLoading}>
        {edit ? "Edit" : "Simpan"}
      </SButton>
    </Form>
  );
}

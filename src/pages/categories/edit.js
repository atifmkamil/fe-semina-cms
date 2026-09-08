import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SBreadCrumb from "../../components/Breadcrumb";
import SAlert from "../../components/Alert";
import Form from "./form";
import { getData, putData } from "../../utils/fetch";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNotif } from "../../redux/notif/actions";

function CategoryEdit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const [form, setForm] = useState({
    name: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const fetchOneCategories = async () => {
    const res = await getData(`/cms/categories/${categoryId}`);
    setForm({ ...form, name: res.data.data.name });
  };

  useEffect(() => {
    fetchOneCategories();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const res = await putData(`/cms/categories/${categoryId}`, form);
    if (res?.data?.data) {
      dispatch(
        setNotif(
          true,
          "success",
          `Berhasil tambah kategori ${res.data.data.name}`,
        ),
      );
      navigate("/categories");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: res.response.data.msg,
      });
    }
  };

  return (
    <Container>
      <SBreadCrumb
        textSecond="Categories"
        urlSecond={"/categories"}
        textThird="Edit"
      />
      {alert.status && <SAlert type={alert.type} message={alert.message} />}
      <Form
        handleChange={handleChange}
        form={form}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </Container>
  );
}

export default CategoryEdit;

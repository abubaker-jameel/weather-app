import React from "react";
import { Card, Button, Typography } from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userAuth) => {
        updateProfile(auth.currentUser, {
          displayName: values.name,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: values.name,
            })
          );
          navigate("/");
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "Password is too short - should be 8 characters minimum.")
            .matches(/[0-9]/, "Password requires a number")
            .matches(/[a-z]/, "Password requires a lowercase letter")
            .matches(/[A-Z]/, "Password requires an uppercase letter")
            .required("Required"),
        })}
        onSubmit={handleSubmit}
      >
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to register.
          </Typography>
          <Form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <InputField label={"Name"} name="name" />
              <InputField label={"Email"} name="email" />
              <InputField label={"Password"} name="password" type="password" />
            </div>
            <Button className="mt-6" fullWidth type="submit">
              Register
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <NavLink
                to={"/sign-in"}
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              >
                Sign In
              </NavLink>
            </Typography>
          </Form>
        </Card>
      </Formik>
    </>
  );
};

export default SignUpForm;

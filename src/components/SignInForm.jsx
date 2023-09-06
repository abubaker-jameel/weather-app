import React from "react";
import { Card, Button, Typography } from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
import InputField from "./InputField";
import { Form, Formik } from "formik";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as Yup from "yup";
import SignInWithGoogle from "./SignInWithGoogle";

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required"),
      })}
      onSubmit={handleSubmit}
    >
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to Sign In.
        </Typography>
        <Form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <InputField label="Email" name="email" />
            <InputField label="Password" name="password" type="password" />
          </div>
          <Button className="mt-6" fullWidth type="submit">
            Sign In
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have account?{" "}
            <NavLink
              to={"/auth"}
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign Up
            </NavLink>
          </Typography>
        </Form>
        <SignInWithGoogle />
      </Card>
    </Formik>
  );
};

export default SignInForm;

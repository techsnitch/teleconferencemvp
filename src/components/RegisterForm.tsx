import * as React from "react";
import { withFormik, Form, FormikProps, Field } from "formik";
import * as Yup from 'yup';



interface FormValues {
    workEmail: string;
    password: string;
    name: string;
    phone: string;
    DOB: Date;
    country: string;
   
}


interface MyFormProps {
    initialworkEmail?: string;
    initialPassword?: string;
    initialName?: string;
    InitialPhone?: string;
    initialDOB?: Date;
    initialCountry?: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
    const {
        errors,
        touched,
        isSubmitting,
    } = props;

    return (
        <Form>
            <div>
                    <Field
                        placeholder="Name"
                        width={50}
                        type="text"
                        name="name"
                    />
            </div>
            <div>
                    <Field
                        placeholder = "Work Email"
                        width={50}
                        type="email"
                        name="email"
                    />
            </div>
            <div>
                    <Field
                        placeholder="Password"
                        width={50}
                        type="password"
                        name="password"
                    />
            </div>
            <div>
                    <Field
                        placeholder="Phone Number"
                        width={50}
                        type="text"
                        name="phone"
                    />
            </div>
            <div>
                    <Field
                        placeholder="Date of Birth"
                        width={50}
                        type="text"
                        name="DOB"
                    />
            </div>
            <div>
                    <Field
                        placeholder="Country"
                        width={50}
                        type="text"
                        name="counrty"
                    />
            </div>
            
                <button
                    type="submit"
                    disabled={
                        isSubmitting ||
                        !!(errors.workEmail && touched.workEmail) ||
                        !!(errors.password && touched.password) ||
                        !!(errors.name && touched.name) ||
                        !!(errors.phone && touched.phone)
                    }
                >
                    Sign In
                </button>
        </Form>
    );
};

const RegisterForm = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => ({
        workEmail: props.initialworkEmail || "",
        password: props.initialPassword || "",
        name: props.initialName || "",
        phone: props.InitialPhone || "",
        DOB: props.initialDOB || new Date(),
        country: props.initialCountry || ""
    }),

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string().min(9).required("Password is required"),
        name: Yup.string().required("Name is required"),
        phone: Yup.string().required("Phone is required"),
        DOB: Yup.date().required("Date is required!")
    }),

    handleSubmit(
        { name, workEmail, password, phone, DOB, country }: FormValues,
        { props, setSubmitting, setErrors }
    ) {
        console.log(name, workEmail, password, phone, DOB, country);
    }
})(InnerForm);

export default RegisterForm;
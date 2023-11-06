import "./App.css";
import {useFormik} from "formik";

import * as yup from "yup";

export const newSchema = yup.object().shape({
    logIn: yup.string().required("Login required").max(15, "Must be 15 characters or less"),
    name: yup.string().required("Firstname required").max(15, "Must be 15 characters or less"),
    surname: yup.string().required("Lastname required").max(20, "Must be 20 characters or less"),
});

function App() {
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            logIn:"",
            name: "",
            surname:""
        },
        validationSchema: newSchema,
        onSubmit: async () => {
            console.log("submit successful");
        }
    });
    return (
        <div className="App">
            <h1>React Hook Form for IPZ</h1>
            <form onSubmit={handleSubmit} className="signIn__form" autoComplete="off">

                <div className=" form__firstname ">
                    <input
                        id={"logIn"}
                        name={"logIn"}
                        type={"text"}
                        placeholder={"Login"}
                        className={"form--signUp firstName"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.logIn}
                        touched={touched.logIn}
                        errors={errors.logIn}
                    />
                </div>

                <div>
                    {touched.logIn && errors.logIn ? <div className="form__label">{errors.logIn}</div> : null}
                </div>
                <div className=" form__firstname ">
                    <input
                        id={"name"}
                        name={"name"}
                        type={"text"}
                        placeholder={"Firstname"}
                        className={"form--signUp firstName"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        touched={touched.name}
                        errors={errors.name}
                    />
                </div>

                <div>
                    {touched.name && errors.name ? <div className="form__label">{errors.name}</div> : null}
                </div>

                <div className=" form__lastname">
                    <input
                        id={"surname"}
                        name={"surname"}
                        type={"text"}
                        placeholder={"Lastname"}
                        className={"form--signUp lastName"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.surname}
                        touched={touched.surname}
                        errors={errors.surname}
                    />
                </div>

                <div>
                    {touched.surname && errors.surname ? <div className="form__label">{errors.surname}</div> : null}
                </div>

                <input type="submit"/>
            </form>

        </div>
    );
}

export default App;

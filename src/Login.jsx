import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Loginn } from './appSlice';


const Login = () => {
    const dispatch = useDispatch()
    const username = useSelector((state) => state.counterReducer.name)
    const useremail = useSelector((state) => state.counterReducer.email)
    const userpassword = useSelector((state) => state.counterReducer.password)


    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            repassword: ""

        },
        validationSchema: Yup.object({
            name: Yup.string().max(15, "we must 15 character for least").required("الاسم مطلوب"),

            email: Yup.string().email("invalid email"),
            password: Yup.string().min(8, "aleast 8"),
            repassword: Yup.string().oneOf([Yup.ref("password"), null], "password must be match")
        }),
        onSubmit: (values) => {
            dispatch(Loginn(values));
            console.log(values);

        },
    })


    return (
        <>

            <form onSubmit={formik.handleSubmit} className='form'>
                <label> enter your name</label>

                <input
                    type="text"
                    name="name"
                    placeholder=" enter your name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                    <div style={{ color: "red" }}>{formik.errors.name}</div>
                )}
                <br /> <br />


                <label> enter your email</label>
                <input type="email"
                    name="email"
                    placeholder='enter your email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                <br /><br />
                {
                    formik.touched.email && formik.errors.email && (<div style={{ color: "red" }}>{formik.errors.email}</div>)
                }



                <label> enter your password</label>
                <input type="password"
                    name="password"
                    placeholder='enter your password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                /><br /><br />
                {formik.touched.password && formik.errors.password && (<div style={{ color: "red" }}>{formik.errors.password}</div>)}


                <label> enter your repassword</label>
                <input type="password" name="repassword" placeholder='enter your repassword'
                    value={formik.values.repassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} /><br /><br />

                {formik.touched.repassword && formik.errors.repassword && (
                    <div style={{ color: "red" }}>{formik.errors.repassword}</div>
                )}

                <button type='submit'>submit</button>

            </form>


            <div className="user-info">
                <p> You name is: <span>{username}</span> </p>
                <p> You email is: <span>{useremail}</span> </p>
                <p> You password is: <span>{userpassword}</span> </p>
            </div>


        </>

    )

}
export default Login

import React from 'react'
import style from "../../styles/Home.module.css"

const Form = ({ }) => {
    return (
        <div className={style.div}>
            <form className={style.form} action="/api/form" method="post">
                <label className={style.label} htmlFor="first">First Name</label>
                <input className={style.input} type="text" id="first" name="first" required />

                <label className={style.label} htmlFor="last">Last Name</label>
                <input className={style.input} type="text" id="last" name="last" required />

                <button className={style.button} type="submit">Submit</button>
            </form></div>)
}

export default Form
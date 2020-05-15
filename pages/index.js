import { useForm } from "react-hook-form";
import { useState } from "react";
import fetch from 'node-fetch'
import Router from 'next/router';
import styles from "./index.module.css"

const Choose = () => {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async function (data) {
    console.log(data)
    Router.push(`/${data.name.replace(/ /g, "-")}`)
  }

  return (
    <div className={styles.welcomeBox}>
      <h1 className={styles.welcome}>Welcome to your favorite show's unofficial blog!</h1>
      <div className={styles.container}>
        <form className={styles.introForm} onSubmit={handleSubmit(onSubmit)} >
          <label className={styles.label}>
            Pick a show:
        </label>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Mad Men, The Wire..."
            ref={register({
              required: true,
              validate: async value => {
                const res = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${value}`)
                if (res.ok) {
                  const data = await res.json()
                  return data.name.length > 0
                } else {
                  return <p className={styles.error}>Don't be silly!</p>
                }
              }
            })}
          />
          {errors.name && <p className={styles.error}>Don't be silly! That's not a show...</p>}
          <input className={styles.button} type="submit" value="Let's go" />
        </form>
      </div>
    </div>
  )
};

export default Choose

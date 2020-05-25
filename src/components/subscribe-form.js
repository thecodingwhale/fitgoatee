import React from 'react'
import { useForm } from 'react-hook-form'
import classnames from 'classnames'
import * as yup from 'yup'

const SubscribeFormSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  emailAddress: yup.string().email().required(),
})

const SubscribeForm = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: SubscribeFormSchema,
  })
  const onSubmit = (data) => console.log(data)
  console.log('errors: ', errors)
  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            className={classnames({
              'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white': true,
              'border-red-500':
                Object.values(errors).length !== 0 && errors.firstName,
            })}
            id="grid-first-name"
            type="text"
            placeholder="Juan"
            name="firstName"
            ref={register({
              required: true,
            })}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs italic">
              First name is required.
            </p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            className={classnames({
              'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white': true,
              'border-red-500':
                Object.values(errors).length !== 0 && errors.lastName,
            })}
            id="grid-last-name"
            type="text"
            placeholder="Dela Cruz"
            name="lastName"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs italic">
              Last name is required.
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-email-address"
          >
            Email Address
          </label>
          <input
            className={classnames({
              'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white': true,
              'border-red-500':
                Object.values(errors).length !== 0 && errors.emailAddress,
            })}
            id="grid-email-address"
            type="text"
            placeholder="bangon@pilipinas.com"
            name="emailAddress"
            ref={register({ required: true })}
          />
          {errors.emailAddress && (
            <p className="text-red-500 text-xs italic">
              A valid email address is required.
            </p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Subscribe
      </button>
    </form>
  )
}

export default SubscribeForm

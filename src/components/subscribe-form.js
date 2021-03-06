import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import classnames from 'classnames'
import * as yup from 'yup'
import { postSubscribe } from '../utils/api'

const SubscribeFormSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  emailAddress: yup.string().email().required(),
})

const SubscribeForm = () => {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const { register, handleSubmit, errors, reset } = useForm({
    validationSchema: SubscribeFormSchema,
  })
  const onSubmit = async (data) => {
    const { firstName, lastName, emailAddress } = data
    setSubmitting(true)
    setSuccess(false)
    setError(false)
    try {
      const response = await postSubscribe({
        firstName,
        lastName,
        emailAddress,
      })
      console.log(response.response)
      setSubmitting(false)
      if (response.statusCode === 200) {
        setSuccess(true)
        reset({
          firstName: '',
          lastName: '',
          emailAddress: '',
        })
      } else {
        console.log(response)
        setError(response.body)
      }
    } catch (error) {
      console.log(error)
      setSubmitting(false)
      setError('Something when wrong.')
    }
  }

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
      {success && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
          role="alert"
        >
          <span className="block sm:inline">Thank you for subscribing!</span>
        </div>
      )}
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div
          className={classnames({
            'w-full md:w-1/2 px-3 mb-6 md:mb-0': true,
            'opacity-50': submitting,
          })}
        >
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            disabled={submitting}
            className={classnames({
              'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white': true,
              'border-red-500':
                Object.values(errors).length !== 0 && errors.firstName,
            })}
            id="grid-first-name"
            type="text"
            placeholder="Antonio"
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
        <div
          className={classnames({
            'w-full md:w-1/2 px-3': true,
            'opacity-50': submitting,
          })}
        >
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            disabled={submitting}
            className={classnames({
              'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white': true,
              'border-red-500':
                Object.values(errors).length !== 0 && errors.lastName,
            })}
            id="grid-last-name"
            type="text"
            placeholder="Luna"
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
      <div
        className={classnames({
          'flex flex-wrap -mx-3 mb-2': true,
          'opacity-50': submitting,
        })}
      >
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-email-address"
          >
            Email Address
          </label>
          <input
            disabled={submitting}
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
      <div
        className={classnames({
          'flex flex-wrap -mx-3 mb-2': true,
        })}
      >
        <div className="w-full px-3 mb-6 md:mb-0">
          <button
            disabled={submitting}
            type="submit"
            className={classnames({
              'bg-blue-500 text-white font-bold py-2 px-4 rounded': true,
              'opacity-50 cursor-not-allowed': submitting,
            })}
          >
            {submitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
      </div>
    </form>
  )
}

export default SubscribeForm

import { useState } from 'react'
import Button from './Button.jsx'
import SectionTitle from './SectionTitle.jsx'
import contactPhoto from '../assets/img/contact.jpg'

const initial = { name: '', phone: '', email: '', interest: '', message: '' }

function validate(v) {
  const errors = {}
  if (v.phone.trim().length < 7) errors.phone = 'Please enter a valid phone number.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) errors.email = 'Please enter a valid e-mail.'
  if (v.message.trim().length < 5) errors.message = 'Please write a message.'
  return errors
}

// Campo com rótulo "flutuante" dentro do input (como no protótipo)
function Field({ label, required, error, textarea, ...props }) {
  const Control = textarea ? 'textarea' : 'input'
  return (
    <div className="field-wrap">
      <label className={`field ${textarea ? 'field--textarea' : ''}`}>
        <Control placeholder=" " aria-required={required} aria-invalid={Boolean(error)} {...props} />
        <span className="field__label">
          {label}
          {required && <b>*</b>}
        </span>
      </label>
      {error && <small className="field__error">{error}</small>}
    </div>
  )
}

export default function ContactSection() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    setErrors((er) => ({ ...er, [name]: undefined }))
    setSent(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length === 0) {
      setSent(true)
      setValues(initial)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <SectionTitle>Contact Us</SectionTitle>

        <form className="contact__grid" onSubmit={handleSubmit} noValidate>
          <div className="contact__fields">
            <Field label="Name" name="name" value={values.name} onChange={handleChange} />
            <Field
              label="Phone Number"
              required
              name="phone"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              error={errors.phone}
            />
            <Field
              label="E-mail"
              required
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Field
              label="Interested In"
              name="interest"
              value={values.interest}
              onChange={handleChange}
            />
            <Field
              label="Message"
              required
              textarea
              name="message"
              rows="4"
              value={values.message}
              onChange={handleChange}
              error={errors.message}
            />
          </div>

          <div className="contact__photo">
            <img src={contactPhoto} alt="Man talking on the phone" loading="lazy" />
          </div>

          <div className="contact__submit">
            <Button type="submit" variant="dark">
              Send email
            </Button>
            {sent && (
              <p className="contact__success" role="status">
                Thank you! Your message was sent.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons.jsx'

// Botão do protótipo: texto em caixa alta + seta. Vira <Link> quando recebe `to`.
export default function Button({ to, variant = 'light', children, className = '', ...rest }) {
  const classes = `btn btn--${variant} ${className}`
  const content = (
    <>
      <span>{children}</span>
      <ArrowRight />
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}

// Título de seção em Roboto Light cinza ("About", "Our Projects", ...).
export default function SectionTitle({ children, as: Tag = 'h2', className = '' }) {
  return <Tag className={`section-title ${className}`}>{children}</Tag>
}

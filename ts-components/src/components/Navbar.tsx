type NavbarProps = {
  currentPath: string
}

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Profile', to: '/profile' },
]

function Navbar({ currentPath }: NavbarProps) {
  return (
    <nav className="nav">
      {links.map((link) => (
        <a
          key={link.to}
          href={`#${link.to}`}
          className={currentPath === link.to ? 'nav-link active' : 'nav-link'}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default Navbar

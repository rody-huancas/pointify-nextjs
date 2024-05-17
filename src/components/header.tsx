import Logo from "./logo"

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <section>
        <Logo />
      </section>
      <section>
        NAV
      </section>
      <section>
        PROFILE
      </section>
    </header>
  )
}

export default Header
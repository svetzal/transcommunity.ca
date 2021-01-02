import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/coding-culture.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 400,
        height: 120,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <img src={Logo}/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

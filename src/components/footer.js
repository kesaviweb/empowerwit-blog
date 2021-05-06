/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        A website for EmpowerWIT, Made with{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by <Link to="https://kesaviweb.com">kesaviweb.com</Link>
      </p>
    </div>
  </footer>
)

export default Footer

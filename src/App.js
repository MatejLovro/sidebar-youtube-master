import "./App.css"
import { motion } from "framer-motion"
import { AccountCircleRounded, AssignmentTurnedInRounded, AttachMoneyRounded, BarChartRounded, ColorLensRounded, DashboardRounded, SettingsRemoteRounded, TocRounded } from "@material-ui/icons"
import Item from "./component/Item"
import logo from "./img/logo.png"
import { useState } from "react"

import Prodajni from "./component/bodycomponents/Prodajni"
import Osnovni from "./component/bodycomponents/Osnovni"

function App() {
  const [open, setOpen] = useState(true)
  const [bodyElement, setBodyElement] = useState("")

  // for collpsing sidebar
  const handleToggle = () => {
    setOpen(!open)
  }

  const sideContainerVariants = {
    true: {
      width: "15rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  }

  const sidebarVariants = {
    true: {},
    false: {
      width: "3rem",
      transition: {
        delay: 0.4,
      },
    },
  }

  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "4rem",
    },
    false: {
      alignSelf: "flex-start",
      marginTop: "2rem",
      width: "3rem",
    },
  }

  return (
    <div className="App">
      <motion.div data-Open={open} variants={sideContainerVariants} initial={`${open}`} animate={`${open}`} className="sidebar_container">
        {/* sidebar div */}
        <motion.div className="sidebar" initial={`${open}`} animate={`${open}`} variants={sidebarVariants}>
          {/* lines_icon */}
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3.5px)",
              WebkitBackdropFilter: "blur(3.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
            onClick={handleToggle}
            className="lines_icon"
          >
            <TocRounded />
          </motion.div>
          {/* profile */}
          <motion.div
            layout
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            className="profile"
            transition={{ duration: 0.4 }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(5.5px)",
              WebkitBackdropFilter: "blur(5.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              cursor: "pointer",
            }}
          >
            <img src={logo} alt="milenij logo" />
          </motion.div>
          {/* groups */}
          <div className="groups">
            {/* group 1 */}
            <div className="group">
              <motion.h3 animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}>MATIČNI</motion.h3>
              <Item icon={<DashboardRounded />} name="Prodajni artikli" />
              <Item icon={<BarChartRounded />} name="Osnovni artikli" />
            </div>
          </div>

          {/* group 3 */}
          <div className="group">
            <motion.h3 animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}>UGOSTITELJSTVO</motion.h3>
            <Item icon={<SettingsRemoteRounded />} name="Prijenos podataka na kasu" />
            <Item icon={<ColorLensRounded />} name="Donos podataka s kase" />
          </div>
        </motion.div>
      </motion.div>

      <div className="body_container">
        {/* <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr /> */}
        <Prodajni />
        <Osnovni />
      </div>
    </div>
  )
}

export default App

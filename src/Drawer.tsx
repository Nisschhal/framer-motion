import "./drawerStyle.css"
import { AnimatePresence, motion } from "framer-motion"

export default function Drawer({
  showDrawer,
  toggleDrawer,
  children,
}: {
  showDrawer: boolean
  toggleDrawer: (value: boolean) => void
  children: React.ReactNode
}) {
  return (
    <div>
      {/* For the Exist animation: AnimatePresense */}
      <AnimatePresence>
        {/* Show Hide wrapper based on active state  */}
        {showDrawer && (
          // Wrapper to constraining drawer
          <>
            <motion.div
              className="drawer-wrapper"
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              //  when drawer is slide down: aka panning or sliding
              // use the pan info to track y axis and set active to false
              onPan={(_, panInfo) => {
                // information of drag: more on docs onPan
                if (panInfo.point.y > 200) toggleDrawer(false)
              }}
            >
              {/* Animated Drawer  */}
              <motion.div
                className="drawer"
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
                initial={{
                  y: "110%",
                  opacity: 0,
                  scale: 0.8,
                }}
                exit={{
                  y: "110%",
                  opacity: 0,
                  scale: 0.8,
                }}
                transition={{
                  duration: 1,
                  // ease: "easeInOut",
                  type: "spring",
                  damping: 15,
                }}
              >
                <button
                  className="drawer--close"
                  onClick={() => toggleDrawer(false)}
                >
                  X
                </button>
                {children}
              </motion.div>
            </motion.div>
            <motion.div
              className="drawer--background"
              onClick={() => toggleDrawer(false)}
              animate={{
                opacity: 1,
              }}
              initial={{
                opacity: 0,
              }}
              exit={{
                opacity: 0,
              }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

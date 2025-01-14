import { useState } from "react"
import "./drawerStyle.css"
import { AnimatePresence, easeInOut, motion } from "framer-motion"
export default function DrawerApp() {
  const [isActive, setIsActive] = useState<boolean>(false)
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Level Up</h1>
      </header>

      <div className="layout">
        <h2>Blog posts</h2>
        <button onClick={() => setIsActive(true)}>Open Drawer</button>
        <AnimatePresence>
          {isActive && (
            <motion.div
              className="drawer-wrapper"
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={(_, panInfo) => {
                if (panInfo.point.y > 200) setIsActive(false)
              }}
            >
              <motion.div
                className="drawer"
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                initial={{
                  y: "110%",
                  opacity: 0,
                }}
                exit={{
                  y: "110%",
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                  ease: easeInOut,
                }}
              >
                <button onClick={() => setIsActive(false)}>Close Drawer</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <h3>List of stuff</h3>
        {posts.map((post) => (
          <DragItem post={post} key={post} />
        ))}
      </div>
    </div>
  )
}

function DragItem({ post }) {
  return (
    <div className="card" key={post}>
      <h4>List Item {post}</h4>
      <p>this is inside the card</p>
    </div>
  )
}

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8]

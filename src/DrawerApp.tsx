import { useState } from "react"
import "./drawerStyle.css"
import Drawer from "./Drawer"
export default function DrawerApp() {
  const [showDrawer, toggleDrawer] = useState<boolean>(false)
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Level Up</h1>
      </header>

      <div className="layout">
        <h2>Blog posts</h2>
        <button onClick={() => toggleDrawer(true)}>Open Drawer</button>
        <Drawer showDrawer={showDrawer} toggleDrawer={toggleDrawer}>
          <h1>I am in drawer</h1>
          <p>What a place to be</p>
        </Drawer>
        <h3>List of stuff</h3>
        {posts.map((post) => (
          <DragItem post={post} key={post} />
        ))}
      </div>
    </div>
  )
}

function DragItem({ post }: { post: any }) {
  return (
    <div className="card" key={post}>
      <h4>List Item {post}</h4>
      <p>this is inside the card</p>
    </div>
  )
}

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8]

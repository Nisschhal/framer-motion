import { motion, useMotionValue, useTransform } from "framer-motion"

const ResonsiveApp = () => {
  const x = useMotionValue(0)
  const scale = useTransform(x, [-100, 0, 100], [1, 1, 1.5])
  const radius = useTransform(x, [-100, 0, 100], [0, 0, 99])
  const bgColor = useTransform(
    x,
    [-100, 0, 100],
    ["#FF5733", "#415358", "#00C6F6"]
  )
  console.log({ radius })
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        className="w-32  h-32 bg-slate-500"
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x,
          scale,
          borderRadius: radius,
          backgroundColor: bgColor,
        }}
      ></motion.div>
    </div>
  )
}

export default ResonsiveApp

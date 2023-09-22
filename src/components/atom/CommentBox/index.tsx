import { motion } from 'framer-motion'

interface IComment {
  content: string
}

const CommentBox = ({ content }: IComment) => {
  return (
    <motion.div
      className="border w-[100px] h-[100px] bg-BLG700"
      drag
      dragConstraints={{
        top: -300,
        left: -300,
        right: 300,
        bottom: 300,
      }}
    >
      {content}
    </motion.div>
  )
}

export default CommentBox

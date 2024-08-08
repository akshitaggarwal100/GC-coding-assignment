import React from 'react'
import { motion } from 'framer-motion'
import './Rating.css'
import { useState } from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

export default function Rating({ rating }) {
    const stars = []

    const [filled, setFilled] = useState(rating)

    function changeRating(rating) {
        setFilled(rating)
    }

    for (let i = 1; i <= 5; i++) {
        if (i <= filled) {
            stars.push(
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                    <AiFillStar className='star' key={i} onClick={() => changeRating(i)} />
                </motion.span>
            )
        }

        else {
            stars.push(
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                    <AiOutlineStar className='star' key={i} onClick={() => changeRating(i)} />
                </motion.span>
            )
        }
    }
    return (
        <div>
            {stars}
        </div>
    )
}
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const LogoWrapper = styled.span`
  display: block;
  max-width: 12rem;
  margin: 0 auto;
`

const circle = {
  hidden: {
    //opacity: 0,
    pathLength: 0,
  },
  visible: {
    //opacity: 1,
    pathLength: 1,
  },
}

const lineX = {
  hidden: {
    //opacity: 0,
    pathLength: 0,
  },
  visible: {
    //opacity:1,
    pathLength: 1,
  },
}

const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
}

const LogoBgCircle = styled.circle`
  fill: ${props =>
    props.variant === "secondary"
      ? props.theme.colors.logoBgSecondary
      : props.theme.colors.logoBgPrimary};
`

const Logo = ({ variant = "primary", animate = true } = {}) => {
  return (
    <LogoWrapper>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 283.46 283.46"
        className="item"
        animate="false"
      >
        <g id="background_group">
          <LogoBgCircle
            variant={variant}
            as={motion.circle}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial={animate ? "hidden" : "visible"}
            animate="visible"
            transition={{
              default: { duration: 1, ease: "easeOut" },
            }}
            id="backer"
            cx="141.73"
            cy="141.73"
            r="124.1"
          />
        </g>
        <path
          data-name="x"
          d="M186.57,187.12,95.34,95.88l2.07-2.07,91.24,91.24Zm-89.16,0-2.07-2.07,36.49-36.5,2.08,2.08Zm54.75-54.74-2.08-2.08,36.49-36.49,2.08,2.07Z"
        />
        <path
          data-name="ltd"
          d="M236.9,148.2H240c2.16,0,3.31-1.18,3.31-3.68v-4.84c0-2.5-1.15-3.68-3.31-3.68H236.9ZM239,137.72h.73c1.11,0,1.51.42,1.51,1.71v5.34c0,1.29-.4,1.71-1.51,1.71H239Zm-7.46,10.48h2.1V137.82h2V136h-6.15v1.82h2Zm-2.19,0v-1.82H226V136h-2.1v12.2Z"
        />
        <path
          data-name="d"
          d="M175,128.69h12.73c7,0,14.05,3,14.05,13,0,13.44-11.32,13.86-14.71,13.86H175Zm-4.12,30.48h15.54c9,0,19.58-3.47,19.58-17.38,0-11.18-7.65-16.76-18.27-16.76H170.88Z"
        />
        <path
          data-name="p"
          d="M87.19,128.69H102c6.86,0,10.33,1.45,10.33,6.16S108.85,141,102,141H87.19Zm-4.12,30.48h4.12V144.61h15.88c6.91,0,13.19-2,13.19-9.81S110,125,103.07,125h-20Z"
        />
        <path
          data-name="pty"
          d="M57.66,143.13,60.19,136H58.06l-1.4,4.66h0L55.15,136H53l2.54,7.14v5.08h2.1Zm-9.15,5.08H50.6V137.82h2V136H46.48v1.83h2Zm-7.58,0v-5h.91c2.59,0,3.79-1,3.79-3.6S44.43,136,41.84,136h-3v12.22Zm0-10.49h.81c1.37,0,1.79.42,1.79,1.88s-.42,1.87-1.79,1.87h-.81Z"
        />
        <path
          data-name="tas"
          d="M164.1,97.27l2,1.16,1.25-2.17-2-1.16Zm-.18-11.18c-.06-.93-.28-3.65-5.58-5.15-1-.27-5.75-1.64-6.79,2.06-.54,1.87.7,3.56,3.44,4.76L157.82,89c1.7.72,2.47,1.5,2.24,2.3-.31,1.07-2.11,1.25-4.08.69-3.25-.93-3.79-2.49-4-3.51l-2.53.07c0,1,.57,4,5.86,5.49,3.29.93,6.37.63,7.2-2.28.58-2.07-.74-3.6-3.38-4.8l-2.79-1.27c-2.37-1-2.52-1.65-2.36-2.18.32-1.13,2.07-1.07,3.7-.61,2.94.84,3.66,2.07,3.74,3.28ZM130.59,92l2.66-.07,1.28-3,7.38-.18,1.41,2.91,2.65-.07-6.54-12.64-2.86.07Zm4.93-5.22L138.05,81l2.82,5.64Zm-12.66,8.59,2.33-.91-3.91-9.92,5.33-2.09-.8-2-13,5.12.79,2L119,85.43Z"
        />
        <motion.path
          variants={fadeScale}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 2.2,
            default: { duration: 0.1, ease: "easeOut" },
          }}
          data-name="distillery"
          d="M224,198.2l1.69-2.68-5.5-3.45-4-11.88L214,183.5l2.84,8.39-8.81,1.1L206,196.28l12.45-1.53Zm-21.14,23.52,2.26-2.2-4.44-4.58,3.6-3.5,7.82,1.3,2.8-2.73-8.17-1.27a4.58,4.58,0,0,0-.08-6.57c-2.77-2.85-5.35-1.54-8.11,1.13l-7,6.79Zm-4-8.67-3.19-3.27,4.39-4.26c1.85-1.81,3.06-2.46,4.38-1.1s.66,2.57-1.19,4.37ZM182.2,234.24,195,226.75l-1.37-2.34-10,5.89-2.16-3.7,8.44-4.95-1.37-2.35-8.45,5L178.1,221l9.81-5.76-1.37-2.34L174,220.26Zm-23,7.16,14.33-4.15-.78-2.7-11.29,3.27L157.7,225l-3,.88Zm-24.07,1.28L150,242.3l-.07-2.81-11.75.31-.35-13.4-3.16.08Zm-13.8-2,3.14.4L126.53,225l-3.14-.4Zm-18.78-5.93,3,1,4.4-12.76,6.85,2.36.89-2.57L101,217.1l-.88,2.57,6.85,2.37ZM96,217.64c.33-1.14,1.25-4.46-4.4-8.57-1-.73-6.12-4.43-9-.5-1.45,2-.71,4.55,2,7.17l2.82,2.71c1.71,1.6,2.28,2.87,1.67,3.72-.83,1.13-3.06.56-5.15-1-3.47-2.51-3.44-4.61-3.21-5.91l-3-1c-.41,1.21-1,5,4.58,9.07,3.51,2.54,7.3,3.53,9.55.43,1.6-2.2.69-4.6-1.92-7.19l-2.77-2.72c-2.38-2.22-2.28-3-1.87-3.62.88-1.2,3-.37,4.68.89,3.12,2.27,3.45,4,3,5.52Zm-29.46-9.32,2.16,2.31,11.85-11.08-2.16-2.31ZM51.39,186.37l4.22,6.72c2.85,4.54,7.11,6.29,11.79,3.34,4.95-3.11,4.59-7.73,1.87-12.08l-4.16-6.61Zm4,1.24,9.12-5.74,1.72,2.72c2.82,4.5,2.83,7.07-.53,9.19s-5.72,1.12-8.6-3.46Z"
        />
        <motion.path
          variants={fadeScale}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 2,
            default: { duration: 0.1, ease: "easeOut" },
          }}
          data-name="pattex"
          d="M215.55,106.42l2.36,4.19,4.4-12.4,12,2.46L232,96.53l-8.45-1.6,3-8.09-2.35-4.16-4.13,11.55-12.92-2.69,2.4,4.26,9.31,1.77Zm-31-37,13.15,11.61,2.13-2.41-10.34-9.13,3.36-3.8,8.69,7.68L203.71,71,195,63.32,198,60l10.1,8.92,2.13-2.41L197.3,55.08ZM158,59.07l3.54,1.22,5.22-15.11,8.12,2.8,1.05-3-19.78-6.82-1,3,8.12,2.8Zm-35.14.61,3.72-.48-2-15.85,8.51-1.1-.41-3.19-20.75,2.68.42,3.2,8.51-1.11ZM85.53,79l3.33-2.18L88.15,72l9.26-6,4.1,2.59,3.32-2.17-18.32-11-3.58,2.34Zm2.16-10.54-1.32-9.36,8,5ZM60.55,95.34l-4.36-3,4.45-6.37c1.22-1.76,2.45-3.2,4.47-1.79S66.22,87.21,65,89Zm6.61,9.17,2.14-3.07-6.11-4.27,4-5.69c1.86-2.67,4.91-7,.1-10.39s-7.88,1-9.74,3.66l-6.12,8.78Z"
        />
        <path
          data-name="aust"
          d="M175.42,193.3l1.77-1.13L176,190.29l-1.77,1.13Zm-7.56,4.18,2-.92L166,187.87l4.67-2.11-.79-1.76-11.38,5.15.79,1.75,4.67-2.11Zm-11.74-4.6c-.42-.73-1.66-2.83-6.51-2-.87.15-5.27.93-4.66,4.32.31,1.72,2,2.59,4.64,2.48l2.76-.11c1.65-.09,2.58.25,2.71,1,.18,1-1.21,1.83-3,2.15-3,.54-4-.51-4.59-1.26l-2,1c.41.81,2,3,6.86,2.13,3-.54,5.38-2,4.91-4.66-.34-1.89-2-2.6-4.61-2.54l-2.74.07c-2.3.13-2.67-.34-2.76-.82-.18-1,1.26-1.68,2.75-1.94,2.68-.48,3.76.22,4.29,1.17Zm-16.29-.81-2.22-.28-.8,6.33c-.24,1.88-1.11,3.33-4.25,2.93s-3.62-2-3.38-3.89l.8-6.34-2.22-.29-.82,6.5c-.47,3.66,1.67,5.45,5.38,5.92s6.23-.73,6.69-4.39Zm-33,1.34L109,194.5l2.28-1.79,5.88,3-.14,2.89,2.11,1.07L119.4,187l-2.27-1.17Zm6.1-2,4.46-3.45-.19,5.63Z"
        />
        <motion.path
          variants={circle}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
          }}
          d="M 264.32121,141.28999 A 122.93121,122.93121 0 0 1 141.39,264.22121 122.93121,122.93121 0 0 1 18.458786,141.28999 122.93121,122.93121 0 0 1 141.39,18.35878 122.93121,122.93121 0 0 1 264.32121,141.28999 Z"
          id="outer-out"
          fill="none"
          stroke="black"
          strokeWidth="3"
        />
        <motion.path
          variants={circle}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.2,
            default: { duration: 2, ease: "easeInOut" },
          }}
          d="M 250.84152,141.28999 A 109.45152,111.44645 0 0 1 141.39,252.73644 109.45152,111.44645 0 0 1 31.938477,141.28999 109.45152,111.44645 0 0 1 141.39,29.843544 109.45152,111.44645 0 0 1 250.84152,141.28999"
          fill="none"
          stroke="black"
          strokeWidth="3"
          id="outer-in"
        />
        <motion.path
          variants={circle}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.4,
            default: { duration: 2, ease: "easeInOut" },
          }}
          fill="none"
          stroke="black"
          strokeWidth="3"
          id="inner"
          d="M 216.96471,141.28999 A 75.574714,76.952185 0 0 1 141.39,218.24218 75.574714,76.952185 0 0 1 65.815283,141.28999 75.574714,76.952185 0 0 1 141.39,64.337808 75.574714,76.952185 0 0 1 216.96471,141.28999"
        />

        <motion.path
          variants={lineX}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1.25,
            default: { duration: 0.2, ease: "easeInOut" },
          }}
          fill="none"
          stroke="black"
          strokeWidth="3"
          id="stroke-0"
          d="m 139.38097,18.416949 0.18806,10.55606"
        />
        <motion.path
          variants={lineX}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1.5,
            default: { duration: 0.2, ease: "easeInOut" },
          }}
          d="m 228.72349,58.136015 -7.63504,7.29191"
          id="stroke-45"
          fill="none"
          stroke="black"
          strokeWidth="3"
        />
        <motion.path
          variants={lineX}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 0.2, ease: "easeInOut" },
          }}
          fill="none"
          stroke="black"
          strokeWidth="3"
          id="stroke-90"
          d="m 263.09952,143.53264 -11.88577,0.0834"
        />
        <motion.path
          variants={lineX}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.25,
            default: { duration: 0.2, ease: "easeInOut" },
          }}
          fill="none"
          stroke="black"
          strokeWidth="3"
          d="m 228.63747,225.38502 -9.00361,-7.75974"
          id="stroke-135"
        />
        <motion.path
          variants={lineX}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.5,
            default: { duration: 0.2, ease: "easeInOut" },
          }}
          fill="none"
          stroke="black"
          strokeWidth="3"
          d="M 144.27194,253.73394 144.46,264.29"
          id="stroke-180"
        />
        <motion.path
          variants={lineX}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.75,
            default: { duration: 0.2, ease: "easeInOut" },
          }}
          fill="none"
          stroke="black"
          strokeWidth="3"
          id="stroke-225"
          d="M 62.74504,218.70809 55.11,226"
        />
        <motion.path
          variants={lineX}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1,
            default: { duration: 0.2, ease: "easeInOut" },
          }}
          fill="none"
          stroke="black"
          strokeWidth="3"
          d="m 30.689489,138.5453 -11.88577,0.0834"
          id="stroke-270"
        />
        <motion.path
          variants={lineX}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1,
            default: { duration: 0.2, ease: "easeInOut" },
          }}
          fill="none"
          stroke="black"
          strokeWidth="3"
          id="stroke-315"
          d="M 62.13361,66.44974 53.13,58.69"
        />
      </motion.svg>
    </LogoWrapper>
  )
}

export default Logo

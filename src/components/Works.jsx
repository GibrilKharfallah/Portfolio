import { useCallback, useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.25, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const MARQUEE_SPEED = 46;
const HOVER_PAUSE_REASON = "hover";
const TOUCH_PAUSE_REASON = "touch";
const HIDDEN_PAUSE_REASON = "hidden";
const DRAG_PAUSE_REASON = "drag";
const DRAG_THRESHOLD = 6;

const Works = () => {
  const trackRef = useRef(null);
  const firstGroupRef = useRef(null);
  const rafRef = useRef(0);
  const lastFrameTimeRef = useRef(0);
  const offsetRef = useRef(0);
  const cycleWidthRef = useRef(0);
  const pauseReasonsRef = useRef(new Set());
  const activePointerIdRef = useRef(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const suppressClickUntilRef = useRef(0);
  const [isHoverDevice, setIsHoverDevice] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const setTransform = useCallback((offset) => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translate3d(${-offset}px, 0, 0)`;
  }, []);

  const wrapOffset = useCallback((value) => {
    const width = cycleWidthRef.current;
    if (!width) return 0;

    let normalized = value % width;
    if (normalized < 0) normalized += width;

    return normalized;
  }, []);

  const measureCycle = useCallback(() => {
    if (!firstGroupRef.current) return;

    const nextCycleWidth = firstGroupRef.current.scrollWidth;
    if (!nextCycleWidth) return;

    cycleWidthRef.current = nextCycleWidth;
    offsetRef.current = wrapOffset(offsetRef.current);
    setTransform(offsetRef.current);
  }, [setTransform, wrapOffset]);

  const addPauseReason = useCallback((reason) => {
    pauseReasonsRef.current.add(reason);
  }, []);

  const removePauseReason = useCallback((reason) => {
    pauseReasonsRef.current.delete(reason);
    lastFrameTimeRef.current = 0;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsHoverDevice(mediaQuery.matches);

    const onMediaQueryChange = (event) => {
      setIsHoverDevice(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", onMediaQueryChange);
    } else {
      mediaQuery.addListener(onMediaQueryChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", onMediaQueryChange);
      } else {
        mediaQuery.removeListener(onMediaQueryChange);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    measureCycle();

    const resizeObserver = new ResizeObserver(() => {
      measureCycle();
    });

    if (firstGroupRef.current) {
      resizeObserver.observe(firstGroupRef.current);
    }

    const onWindowResize = () => {
      measureCycle();
    };

    window.addEventListener("resize", onWindowResize, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", onWindowResize);
    };
  }, [measureCycle]);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    const onVisibilityChange = () => {
      if (document.hidden) {
        addPauseReason(HIDDEN_PAUSE_REASON);
      } else {
        removePauseReason(HIDDEN_PAUSE_REASON);
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [addPauseReason, removePauseReason]);

  useEffect(() => {
    const animate = (timestamp) => {
      const previousTimestamp = lastFrameTimeRef.current || timestamp;
      const deltaSeconds = (timestamp - previousTimestamp) / 1000;
      lastFrameTimeRef.current = timestamp;

      if (!pauseReasonsRef.current.size && cycleWidthRef.current > 0) {
        offsetRef.current =
          (offsetRef.current + MARQUEE_SPEED * deltaSeconds) %
          cycleWidthRef.current;
        setTransform(offsetRef.current);
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(rafRef.current);
    };
  }, [setTransform]);

  const handleMouseEnter = () => {
    if (!isHoverDevice) return;
    addPauseReason(HOVER_PAUSE_REASON);
  };

  const handleMouseLeave = () => {
    if (!isHoverDevice) return;
    removePauseReason(HOVER_PAUSE_REASON);
  };

  const handleTouchStart = () => {
    addPauseReason(TOUCH_PAUSE_REASON);
  };

  const handleTouchEnd = () => {
    removePauseReason(TOUCH_PAUSE_REASON);
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (!cycleWidthRef.current) return;

    if (event.pointerType !== "mouse") {
      addPauseReason(TOUCH_PAUSE_REASON);
    }

    activePointerIdRef.current = event.pointerId;
    isDraggingRef.current = false;
    setIsDragging(false);
    hasDraggedRef.current = false;
    dragStartXRef.current = event.clientX;
    dragStartOffsetRef.current = offsetRef.current;

    addPauseReason(DRAG_PAUSE_REASON);
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (event.pointerId !== activePointerIdRef.current) return;

    const deltaX = event.clientX - dragStartXRef.current;
    if (!hasDraggedRef.current && Math.abs(deltaX) <= DRAG_THRESHOLD) {
      return;
    }

    if (!hasDraggedRef.current) {
      hasDraggedRef.current = true;
      isDraggingRef.current = true;
      setIsDragging(true);
    }

    offsetRef.current = wrapOffset(dragStartOffsetRef.current - deltaX);
    setTransform(offsetRef.current);
  };

  const handlePointerUpOrCancel = (event) => {
    if (event.pointerId !== activePointerIdRef.current) return;

    if (event.pointerType !== "mouse") {
      removePauseReason(TOUCH_PAUSE_REASON);
    }

    if (hasDraggedRef.current) {
      suppressClickUntilRef.current = performance.now() + 300;
    }

    if (isDraggingRef.current) {
      setIsDragging(false);
    }

    isDraggingRef.current = false;
    hasDraggedRef.current = false;
    activePointerIdRef.current = null;

    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    removePauseReason(DRAG_PAUSE_REASON);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 w-full'>
        <motion.div
          variants={fadeIn("", "", 0.2, 1)}
          className={`works-marquee${isDragging ? " is-dragging" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUpOrCancel}
          onPointerCancel={handlePointerUpOrCancel}
          onClickCapture={(event) => {
            if (performance.now() <= suppressClickUntilRef.current) {
              event.preventDefault();
              event.stopPropagation();
            }
          }}
        >
          <div className='works-marquee-track' ref={trackRef}>
            <div className='works-marquee-group' ref={firstGroupRef}>
              {projects.map((project, index) => (
                <div className='works-marquee-item' key={`group-a-${index}`}>
                  <ProjectCard index={index} {...project} />
                </div>
              ))}
            </div>

            <div className='works-marquee-group' aria-hidden='true'>
              {projects.map((project, index) => (
                <div className='works-marquee-item' key={`group-b-${index}`}>
                  <ProjectCard index={index} {...project} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

import project from "../Projects.module.css"

import { dataProjects } from "../../../data/dataProjects"
import { BoxProject } from "./BoxProject"
import { ArrowProps } from "react-multi-carousel"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";

interface CustomLeftArrowProps extends ArrowProps {}
interface CustomRightArrowProps extends ArrowProps {}

const CustomLeftArrow = ({ onClick }: CustomLeftArrowProps) => {
  return (
    <div onClick={onClick} className={project.arrowBtnLeft}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-left"><path d="M6 8L2 12L6 16"/><path d="M2 12H22"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus"><path d="M5 12h14"/></svg>
    </div>
  )
}

const CustomRightArrow = ({ onClick }: CustomRightArrowProps) => {
  return (
    <div onClick={onClick} className={project.arrowBtnRight}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus"><path d="M5 12h14"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
    </div>
  )
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1
  }
};

export const CarouselProject = () => {

  return (
    <Carousel 
      responsive={responsive}
      customLeftArrow={<CustomLeftArrow/>}
      customRightArrow={<CustomRightArrow/>}
      arrows
      containerClass="container-with-dots"
      infinite
      keyBoardControl
      minimumTouchDrag={10}
      shouldResetAutoplay
      slidesToSlide={1}
      swipeable
    >
      {dataProjects.map((project, index) => (
        <BoxProject
          key={index}
          img1={project.img1}
          img2={project.img2}
          img3={project.img3}
          title={project.title}
          description={project.description}
        />
      ))}
    </Carousel>
  )
}

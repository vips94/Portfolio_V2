import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import styles from "./projects.module.scss";
import Title from "../title";
import Hexagon from "../shapes/hexagon";
import { motion  } from "framer-motion";
import { useDispatch } from "react-redux";
import {setProjectData,setIsProjectSelected} from '@/store/project';

let desktopList = [
  [
    {
      image: "to-do1.png",
      title: "1",
      projectData: {
        projectName: "To-Do",
        image: "to-do1.png",
        projectType: "Website",
        tools: ["html.svg", "css.svg", "react.svg", "redux.svg"],
        link: "https://vips94.github.io/to-do/",
      },
    },
    {
      image: "world-clock.png",
      title: "2",
      projectData: {
        projectName: "World Clock",
        image: "world-clock.png",
        projectType: "Website",
        tools: ["html.svg", "css.svg", "react.svg"],
        link: "https://vips94.github.io/AnalogClock/",
      },
    },
    {
      image: "brain-on-draw.png",
      title: "3",
      projectData: {
        projectName: "Brain On Draw",
        image: "brain-on-draw.png",
        projectType: "Game",
        tools: ["unity1.svg"],
        link: "",
      },
    },
    {
      image: "two-planes.png",
      title: "4",
      projectData: {
        projectName: "Two-Planes",
        image: "two-planes.png",
        projectType: "Game",
        tools: ["unity1.svg"],
        link: "",
      },
    },
  ],
  [
    {
      image: "the-stack.png",
      title: "5",
      projectData: {
        projectName: "The Stack",
        image: "the-stack.png",
        projectType: "Game",
        tools: ["unity1.svg"],
        link: "",
      },
    },
    {
      image: "save-me.png",
      title: "6",
      projectData: {
        projectName: "SAVE ME",
        image: "save-me.png",
        projectType: "Game",
        tools: ["unity1.svg"],
        link: "",
      },
    },
    {
      image: "rolling-ball.png",
      title: "7",
      projectData: {
        projectName: "Rolling Ball",
        image: "rolling-ball.png",
        projectType: "Game",
        tools: ["unity1.svg"],
        link: "",
      },
    },
  ],
  [
    {
      image: "to-do1.png",
      title: "8",
      projectData: {
        projectName: "7 Wonders",
        image: "to-do1.png",
        projectType: "Website",
        tools: ["html.svg", "css.svg", "react.svg", "redux.svg"],
        link: "https://vips94.github.io/to-do/",
      },
    },
    {
      image: "world-clock.png",
      title: "9",
      projectData: {
        projectName: "World Clock",
        image: "to-do1.png",
        projectType: "Website",
        tools: ["html.svg", "css.svg", "react.svg", "redux.svg"],
        link: "https://vips94.github.io/to-do/",
      },
    },
    {
      image: "brain-on-draw.png",
      title: "10",
      projectData: {
        projectName: "Brain On Draw",
        image: "to-do1.png",
        projectType: "Website",
        tools: ["html.svg", "css.svg", "react.svg", "redux.svg"],
        link: "https://vips94.github.io/to-do/",
      },
    },
    {
      image: "two-planes.png",
      title: "11",
      projectData: {
        projectName: "Two-Planes",
        image: "to-do1.png",
        projectType: "Website",
        tools: ["html.svg", "css.svg", "react.svg", "redux.svg"],
        link: "https://vips94.github.io/to-do/",
      },
    },
  ],
];
let tabletList = [
  [
    {
      image: "to-do1.png",
      title: "1",
      projectData: {
        projectName: "To-Do",
        image: "to-do1.png",
        projectType: "Website",
        tools: ["html.svg", "css.svg", "react.svg", "redux.svg"],
        link: "https://vips94.github.io/to-do/",
      },
    },
    {
      image: "world-clock.png",
      title: "2",
      projectData: {
        projectName: "World Clock",
        image: "world-clock.png",
        projectType: "Website",
        tools: ["html.svg", "css.svg", "react.svg"],
        link: "https://vips94.github.io/AnalogClock/",
      },
    },
    {
      image: "brain-on-draw.png",
      title: "3",
      projectData: {
        projectName: "Brain On Draw",
        image: "brain-on-draw.png",
        projectType: "Game",
        tools: ["unity1.svg"],
        link: "",
      },
    },
  ],
  [
    {
      image: "two-planes.png",
      title: "4",
      projectData: {
        projectName: "Two-Planes",
        image: "two-planes.png",
        projectType: "Game",
        tools: ["unity1.svg"],
        link: "",
      },
    },
    {
      image: "the-stack.png",
      title: "5",
      projectData: {
        projectName: "The Stack",
        image: "the-stack.png",
        projectType: "Game",
        tools: ["unity1.svg"],
        link: "",
      },
    },
    
  ],
  [
    {
      image: "save-me.png",
      title: "6",
      projectData: {
        projectName: "SAVE ME",
        image: "save-me.png",
        projectType: "Game",
        tools: ["unity1.svg"],
        link: "",
      },
    },
    {
      image: "rolling-ball.png",
      title: "7",
      projectData: {
        projectName: "Rolling Ball",
        image: "rolling-ball.png",
        projectType: "Game",
        tools: ["unity1.svg"],
        link: "",
      },
    },
    {
      image: "to-do1.png",
      title: "8",
      projectData: {
        projectName: "7 Wonders",
        image: "to-do1.png",
        projectType: "Website",
        tools: ["html.svg", "css.svg", "react.svg", "redux.svg"],
        link: "https://vips94.github.io/to-do/",
      },
    },
  ],
  [
    {
      image: "world-clock.png",
      title: "9",
      projectData: {
        projectName: "World Clock",
        image: "to-do1.png",
        projectType: "Website",
        tools: ["html.svg", "css.svg", "react.svg", "redux.svg"],
        link: "https://vips94.github.io/to-do/",
      },
    },
    {
      image: "brain-on-draw.png",
      title: "10",
      projectData: {
        projectName: "Brain On Draw",
        image: "to-do1.png",
        projectType: "Website",
        tools: ["html.svg", "css.svg", "react.svg", "redux.svg"],
        link: "https://vips94.github.io/to-do/",
      },
    },
  ],
  [
    {
      image: "two-planes.png",
      title: "11",
      projectData: {
        projectName: "Two-Planes",
        image: "to-do1.png",
        projectType: "Website",
        tools: ["html.svg", "css.svg", "react.svg", "redux.svg"],
        link: "https://vips94.github.io/to-do/",
      },
    },
  ]
];
let mobileList = [
  [
    {
      image: "to-do1.png",
      title: "1",
      projectData: {
        projectName: "To-Do",
        image: "to-do1.png",
        projectType: "Website",
        tools: ["html.svg", "css.svg", "react.svg", "redux.svg"],
        link: "https://vips94.github.io/to-do/",
      },
    },
    {
      image: "world-clock.png",
      title: "2",
      projectData: {
        projectName: "World Clock",
        image: "world-clock.png",
        projectType: "Website",
        tools: ["html.svg", "css.svg", "react.svg"],
        link: "https://vips94.github.io/AnalogClock/",
      },
    },
  ],
  [
    {
      image: "brain-on-draw.png",
      title: "3",
      projectData: {
        projectName: "Brain On Draw",
        image: "brain-on-draw.png",
        projectType: "Game",
        tools: ["unity1.svg"],
        link: "",
      },
    },
  ],
  [
    {
      image: "two-planes.png",
      title: "4",
      projectData: {
        projectName: "Two-Planes",
        image: "two-planes.png",
        projectType: "Game",
        tools: ["unity1.svg"],
        link: "",
      },
    },
    {
      image: "the-stack.png",
      title: "5",
      projectData: {
        projectName: "The Stack",
        image: "the-stack.png",
        projectType: "Game",
        tools: ["unity1.svg"],
        link: "",
      },
    },
    
  ],
  [
    {
      image: "save-me.png",
      title: "6",
      projectData: {
        projectName: "SAVE ME",
        image: "save-me.png",
        projectType: "Game",
        tools: ["unity1.svg"],
        link: "",
      },
    },
    
    
  ],
  [
    {
      image: "rolling-ball.png",
      title: "7",
      projectData: {
        projectName: "Rolling Ball",
        image: "rolling-ball.png",
        projectType: "Game",
        tools: ["unity1.svg"],
        link: "",
      },
    },
    {
      image: "to-do1.png",
      title: "8",
      projectData: {
        projectName: "7 Wonders",
        image: "to-do1.png",
        projectType: "Website",
        tools: ["html.svg", "css.svg", "react.svg", "redux.svg"],
        link: "https://vips94.github.io/to-do/",
      },
    },
  ],
  [
    
    {
      image: "world-clock.png",
      title: "9",
      projectData: {
        projectName: "World Clock",
        image: "to-do1.png",
        projectType: "Website",
        tools: ["html.svg", "css.svg", "react.svg", "redux.svg"],
        link: "https://vips94.github.io/to-do/",
      },
    },
    
  ],
  [
    {
      image: "brain-on-draw.png",
      title: "10",
      projectData: {
        projectName: "Brain On Draw",
        image: "to-do1.png",
        projectType: "Website",
        tools: ["html.svg", "css.svg", "react.svg", "redux.svg"],
        link: "https://vips94.github.io/to-do/",
      },
    },
    {
      image: "two-planes.png",
      title: "11",
      projectData: {
        projectName: "Two-Planes",
        image: "to-do1.png",
        projectType: "Website",
        tools: ["html.svg", "css.svg", "react.svg", "redux.svg"],
        link: "https://vips94.github.io/to-do/",
      },
    },
  ],
];
    
let tablet = null as any;
let mobile = null as any;
const Projects = forwardRef((props,ref:any) => {
  const [lists,setLists] = useState(desktopList);
  const dispatch = useDispatch();
  const onHexagonClick = (project:any) => {
    dispatch(setIsProjectSelected(true))
    dispatch(setProjectData(project?.projectData));
  };
 

  const resizeProjectList1 = (e:any) => {
    if (tablet.matches) {
      setLists(tabletList);
    }else if(mobile.matches){
      setLists(tabletList);
    }else{
      setLists(desktopList);
    }
  }

  const resizeProjectList2 = (e:any) => {
    if(mobile.matches){
      setLists(mobileList);
    }else if(tablet.matches){
      setLists(tabletList);
    }else{
      setLists(desktopList);
    }
  }

  useEffect(()=>{
    tablet = window?.matchMedia('(max-width: 850px)')
    mobile = window?.matchMedia('(max-width: 546px)')
    resizeProjectList1(tablet);
    resizeProjectList2(mobile);

    tablet.addEventListener("change",resizeProjectList1)
    mobile.addEventListener("change",resizeProjectList2)
    return () => {
      tablet.removeEventListener("change",resizeProjectList1)
      mobile.removeEventListener("change",resizeProjectList2)
    }
  },[])

  function Rows() {
    return (
      <>
        {lists.map((row_list:any, index:number) => {
          return (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.03 * index,
                type: "spring",
              }}
              viewport={{ once: true }}
              className={styles.row}
              key={index}
            >
              {row_list.map((item:any, index: number) => {
                return (
                  <Hexagon
                    key={index}
                    image={`/images/projects/${item.image}`}
                    title={`${item.title}`}
                    containerClassName="hexagon-1"
                    onClick={()=>onHexagonClick(item)}
                  />
                );
              })}
            </motion.div>
          );
        })}
      </>
    );
  };

  return (
    <section className={styles["project-section"]} ref={ref} id="projects">
      <div className={styles.section}>
        <Title title="MY PROJECTS" shadowTitle="MY PROJECTS" />
        <div className={styles["project-list-container"]}>
          <div className={styles["project-list"]}>
            {Rows()}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Projects;

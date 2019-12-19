import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Timeline(props){
    return(
        <VerticalTimeline>
            <VerticalTimelineElement
            iconStyle={{ background: "white", color: '#fff' }}
            // icon={<StarIcon />}
        />
        <i className="fas fa-graduation-cap"></i>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background:"#F5B716" ,color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2012 - 2017"
    iconStyle={{ background: '#F5B716', color: '#fff' }}
    // icon={<WorkIcon />}
    icon= {<i class="fas fa-graduation-cap"></i>}
  >
    <h3 className="vertical-timeline-element-title">Clerk</h3>
    <h4 className="vertical-timeline-element-subtitle">Sixflags - LaRonde, Qc</h4>
    <p>
     Customer Service, 
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2013 - 2015"
    contentStyle={{ background:"black" ,color: '#ffff' }}
    iconStyle={{ background: 'black', color: '#fff' }}
    // icon={<SchoolIcon />}
    icon={<i className="fas fa-graduation-cap"></i>}
  >
    <h3 className="vertical-timeline-element-title">DEC - Language Profile</h3>
    <h4 className="vertical-timeline-element-subtitle">College degree</h4>
    <p>
    Dawson College
    </p>
  </VerticalTimelineElement>
    
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2015 - 2017"
    contentStyle={{ background:"black" ,color: '#ffff' }}
    iconStyle={{ background: 'black', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Certificate of Science and Technology</h3>
    <h4 className="vertical-timeline-element-subtitle">Certificate</h4>
    <p>
      Concordia University
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background:"#F5B716" ,color: '#fff' }}
    date="2017 - 2019"
    iconStyle={{ background: '#F5B716', color: 'green' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Team Leader</h3>
    <h4 className="vertical-timeline-element-subtitle">Sixflags - LaRonde, Qc</h4>
    <p>
      Leadership, Training, Discipline, Problem Solver
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2017 - 2020"
    contentStyle={{ background:"black" ,color: '#ffff' }}
    iconStyle={{ background: 'black', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Science</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Concordia University
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background:"#F5B716" ,color: '#fff' }}
    date="2018 - 2019"
    iconStyle={{ background: '#F5B716', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Skylow, Qc</h4>
    <p>
      User Experience, User Interface, Visual Design, Front-end, Back-end
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{  color: '#fff' }}
    date="Present"
    iconStyle={{ background: 'gray', color: '#fff' }}
    // icon={<WorkIcon />}
  >
   
  </VerticalTimelineElement>
  
</VerticalTimeline>
    )
}

export {Timeline}
import React from 'react';
import './CourseInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const CourseInfo = (props) => {
    const { name , instructor , price , img , rating } = props.course;
    
    return (
        <div className="courseInfo">
            <div className="course-img"> 
                <img src={img} alt=""/>
            </div>
            <div className="course-name">
                <h4>{name}</h4>
                <p><small> {instructor}</small></p>
                <p><small className="price">Rating:{rating}</small></p>
                
                <p >${price}</p>
                <button onClick={()=>props.handleAddCourse(props.course)} className="enroll-btn"><FontAwesomeIcon icon={faCartArrowDown} /> Enroll now</button>
            </div>
        </div>
    );
};

export default CourseInfo;
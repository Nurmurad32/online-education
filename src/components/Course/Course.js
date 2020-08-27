import React, { useState } from 'react';
import fakeData from '../../fakeData/courseData';
import './course.css';
import CourseInfo from '../courseInfo/CourseInfo';
import Cart from '../Cart/Cart';
import Container from 'react-bootstrap/Container';


const Course = () => {
    const [courses , setCourses]=useState(fakeData);

    const [cart , setCart] = useState([]);

    const handleAddCourse = (course) =>{
        // console.log('course added', course);
        const newCart = [...cart,course];
        setCart(newCart);
    }

    return (
        <div >
            <Container>
                <div className="banner-down-text">
                    <h3>Top free courses, sorted by popularity</h3>
                    <p>You can start and finish one of these popular courses in under a day - for free! Check out the list below.</p>
                </div>
                <div className="course-container">
                    <div className="course">
                        {
                            courses.map(cs =><CourseInfo handleAddCourse={handleAddCourse} course={cs}></CourseInfo>)
                        }
                    </div>
                    <div className="course-cart">
                        <Cart cart={cart} ></Cart>   
                    </div>
                </div>
            </Container>    
        </div>
    );
};

export default Course;

import React from "react";

interface Course{
    id:number;
    name:string;
    youtube_url:string;
}

const courseList:Course[]=[
    {id:1,name:"Java Full Course",youtube_url:`https://www.youtube.com`},
    {id:2,name:"Python Full Course",youtube_url:`https://www.youtube.com`},
    {id:3,name:"JavaScript Full Course",youtube_url:`https://www.youtube.com`}
];

const Courses:React.FC=()=>{
    return(
        <main>
            <h1>Technical Knowledge what everyone should have</h1>
            <ol>
                {courseList.map(course=>(
                    <li key={course.id}>
                        <h2>{course.name}</h2>
                        <a href="{course.youtube_url}" target="_blank">Watch from youtube</a>
                    </li>
                )

                )}
            </ol>
        </main>
    );
};

export default Courses;
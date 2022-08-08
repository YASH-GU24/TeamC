import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
function Menu({ handlescroll }) {
    let navigate = useNavigate();
    const [openabout, setOpenabout] = useState(false);
    const [openacad, setOpenacad] = useState(false);
    const [openpupil, setOpenpupil] = useState(false);
    const [openresearch, setOpenresearch] = useState(false);
    const handleabout = () => {
        setOpenabout(!openabout);
        setOpenacad(false);
        setOpenpupil(false);
        setOpenresearch(false);
    }
    const handlecad = () => {
        setOpenabout(false);
        setOpenacad(!openacad);
        setOpenpupil(false);
        setOpenresearch(false);
    }
    const handlehome = () => {
        setOpenabout(false);
        setOpenacad(false);
        setOpenpupil(false);
        setOpenresearch(false);
    }
    const handlepupil = () => {
        setOpenabout(false);
        setOpenacad(false);
        setOpenpupil(!openpupil);
        setOpenresearch(false);
    }
    const handlelab = () => {
        setOpenabout(false);
        setOpenacad(false);
        setOpenpupil(false);
        setOpenresearch(!openresearch);
    }
    return (
        <>
            <div className='w-full h-full m-2'>
                <div className={"border-2 max-w-full w-72 flex flex-col m-2 mt-14 shadow rounded "}>
                    <div className='text-xl font-medium p-2 w-full border-2 bg-blue-500 text-white rounded-t shadow'>Department of Computer Science and Engineering</div>
                    <div className='p-3'>
                        <div className='p-2 my-1 shadow hover:bg-blue-100 rounded' onClick={() => { navigate("/"); handlehome(); }}><i className='fa fa-home w-10 px-auto'></i>Home</div>
                        <div className='p-2 my-1 shadow hover:bg-blue-100 rounded'>
                            <div onClick={handleabout}><i className='fa fa-info w-10 px-auto'></i>About Us</div>
                            <div className={"z-10 my-2 border rounded-b-md max-h-max group-hover:block shadow bg-white duration-700 " + (openabout ? '' : 'hidden')}>
                                <div ><button className='flex justify-start w-full p-2 font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm' onClick={() => { navigate("/MissionandVision") }}>Vision and Mission</button></div>
                                <div ><button className='flex justify-start w-full p-2 font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm' onClick={() => { navigate("/Infrastructure") }}>Infrastructure: At a glance</button></div>
                                <div ><button className='flex justify-start w-full p-2 font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm' onClick={() => { navigate("/messageofHOD") }}>HOD's Message</button></div>
                                <div ><button className='flex justify-start w-full p-2 font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm' onClick={() => { }}>Achievements</button></div>
                                <div ><button className='flex justify-start w-full p-2 font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm rounded-b-md' onClick={() => { handlescroll() }} >Contact us</button></div>
                            </div>
                        </div>
                        <div className='p-2 my-1 shadow hover:bg-blue-100 rounded'>
                            <div onClick={handlecad}><i className='fa fa-university w-10 px-auto'></i>Academics</div>
                            <div className={"z-10 my-2 border rounded-b-md max-h-max group-hover:block shadow bg-white duration-500 " + (openacad ? '' : 'hidden')}>
                                <div> <button className='flex w-full p-2 font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm' onClick={() => { }}>Programmes</button></div>
                                <div > <button className='flex w-full p-2 font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm' onClick={() => { navigate("/Acadcord"); }}>Academic Coordinates</button></div>
                                <div ><button className='flex w-full p-2 font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm' onClick={() => { navigate("/Syllabus"); }}>Syllabus</button></div>
                                <div > <button className='flex w-full p-2 font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm' onClick={() => { navigate("/Timetable"); }}>Time-Tables</button></div>
                                <div > <button className='flex w-full p-2 font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm rounded-b-md' onClick={() => { }}>Department Activities Calendar</button></div>
                            </div>
                        </div>
                        <div className='p-2 my-1 shadow hover:bg-blue-100 rounded'>
                            <div onClick={handlepupil}><i className='fa fa-person w-10 px-auto'></i>People</div>
                            <div className={"z-10 my-2 border rounded-b-md max-h-max group-hover:block shadow bg-white duration-500 " + (openpupil ? '' : 'hidden')}>
                                <div> <button className='flex justify-start w-full p-2 font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm' onClick={() => { }}>Faculty</button></div>
                                <div> <button className='flex justify-start p-2 w-full font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm' onClick={() => { }}>PhD Scholars</button></div>
                                <div> <button className='flex justify-start p-2 w-full font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm' onClick={() => { }}>Students</button></div>
                                <div> <button className='flex justify-start p-2 w-full font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm' onClick={() => { }}>Alumni*</button></div>
                                <div> <button className='flex justify-start p-2 w-full font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm rounded-b-md' onClick={() => { }}>Staff</button></div>
                            </div>
                        </div>
                        <div className='p-2 my-1 shadow hover:bg-blue-100 rounded'>
                            <div onClick={handlelab}><i className='fa fa-flask w-10 px-auto'></i>Research and Labs</div>
                            <div className={"z-10 my-2 border rounded-b-md max-h-max group-hover:block shadow bg-white duration-500 " + (openresearch ? '' : 'hidden')}>
                                <div> <button className='flex justify-start w-full p-2 font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm' onClick={() => { }}>Research Areas</button></div>
                                <div> <button className='flex justify-start p-2 w-full font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm' onClick={() => { }}>Department Labs</button></div>
                                <div> <button className='flex justify-start p-2 w-full font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm' onClick={() => { }}>Publications(Year-Wise)</button></div>
                                <div> <button className='flex justify-start p-2 w-full font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm' onClick={() => { }}>Projects</button></div>
                                <div> <button className='flex justify-start p-2 w-full font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm rounded-b-md' onClick={() => { }}>Consultancy</button></div>
                                <div> <button className='flex justify-start p-2 w-full font-medium hover:bg-blue-300 active:translate-y-1 shadow-sm rounded-b-md' onClick={() => { }}>Research Labs</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
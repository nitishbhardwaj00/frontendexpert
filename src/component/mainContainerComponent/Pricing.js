import React from 'react';
import PricingDesc from './PricingDesc';
import Title from '../navbarleftComponent/Titles';


export default function Pricing(){

    return(
        <div className="Pricing" id="pricing">
            <Title title= 'Pricing' marginBottom= '30'/>
            <div className="pricing-list">

            <PricingDesc 
            title="Front-end Beginner" 
            price =' ₹ 5999 ' 
            className="beginner"
            path='/BegineerCourse'
            LinkTitle="Enroll Now!"
            pricingDescription = {<>This career path will turn you into a hireable Junior frontend Developer, and teach you how to nail the job interview. It contains over <span className="white-bold"> 50+ hours</span>  of top-notch tutorials, with coding challenges, and dozens of real-world projects.</>}
            />

            <PricingDesc 
            title="Front-end Intermediate" 
            price =' ₹ 10999 ' 
            className="intermediate"
            path='/IntermediateCourse'
            LinkTitle="Enroll Now!"
            pricingDescription = {<>This career path will turn you into a hireable Frontend Developer, and teach you how to nail the job interview. It contains over <span className="white-bold"> 80+ hours</span>   of top-notch tutorials, with coding challenges, and dozens of real-world projects.</>}
            />


            <PricingDesc 
            title="Front-end Expert" 
            price =' ₹ 15999 ' 
            className="expert"
            path='/ExpertCourse'
            LinkTitle="Enroll Now!"
            pricingDescription = {<>This career path will turn you into a hireable senior Frontend Developer, and teach you how to nail the job interview. It contains over <span className="white-bold"> 100+ hours</span> of top-notch tutorials, with coding challenges, and dozens of real-world projects.</>}
            />
            
            </div>
        </div>
        
    )
}

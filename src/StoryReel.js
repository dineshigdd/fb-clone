import React from 'react';
import "./StoryReel.css";
import Story from './Story';


function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://www.w3schools.com/css/img_5terre.jpg"
                profileSrc="https://i.pinimg.com/564x/00/64/1b/00641b4e6ef71bfac51711abadaad5f3.jpg"    
                title="Maduri"/>
            <Story 
                image="https://www.w3schools.com/css/img_forest.jpg"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Mahesh_Babu_at_Selvandhan_Audio_Launch.jpg/440px-Mahesh_Babu_at_Selvandhan_Audio_Launch.jpg"    
                title="Mahesh"/>
            <Story 
                image="https://www.w3schools.com/css/img_lights.jpg"
                profileSrc="https://1.bp.blogspot.com/-Ix6j05VSexw/WvfHanPFPiI/AAAAAAAAAw4/585o4eyD0UAcdLtM1y0Ef65iJzDTs8IWwCLcBGAs/s640/Kaushal%2BMadavi.png"    
                title="Kaushalya"/>
            <Story 
                image="https://www.w3schools.com/css/img_mountains.jpg"
                profileSrc="https://i.pinimg.com/564x/e0/2b/08/e02b08bf0834ff950b34dbfdbe569be3.jpg"    
                title="Dennis"/>

            <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrUitsxM9od0aQvBPenYQwfbky_p8rosNUPg&usqp=CAU"
                profileSrc="https://live.staticflickr.com/2595/3725280269_4f5a4c380b_b.jpg"    
                title="Vanniya"/>



        </div>
    )
}

export default StoryReel

import React from 'react';

export default function Header() {
    
    const displayName = "Rain Walker";
    const regionID = "1600";
    const districtID = "0000";
    const communityID = "0000";
    const clusterID = "0000";
    
    
    
    return (
    <header id="userHeader">
        <img src="" alt="" id="userThumb"/>
        <div id='userName'>{displayName}</div>
        <div id='userID'>
            <span>{regionID}</span>.
            {/* academy link: academy info and region list */}
            <span>{districtID}</span>.
            {/* region link: region info and district list */}
            <span>{communityID}</span>.
            {/* district link: district info and community list */}
            <span>{clusterID}</span>
            {/* community link: community info and member list */}
        </div>
        <table id='userClock'>
            <tr>
                <td alt="12:00 - 12:10 AM" id='temporaryHeightIndicator'></td>
                <td alt="12:10 - 12:20 AM"></td>
                <td alt="12:20 - 12:30 AM"></td>
                <td alt="12:30 - 12:30 AM"></td>
                <td alt="12:40 - 12:50 AM"></td>
                <td alt="12:50 - 1:00 AM"></td>
                <td alt="1:00 - 1:10 AM"></td>
                <td alt="1:10 - 1:20 AM"></td>
                <td alt="1:20 - 1:30 AM"></td>
                <td alt="1:30 - 1:40 AM"></td>
                <td alt="1:40 - 1:50 AM"></td>
                <td alt="1:50 - 2:00 AM"></td>
                    <td alt="2:00 - 2:10 AM"></td>
                    <td alt="2:10 - 2:20 AM"></td>
                    <td alt="2:20 - 2:30 AM"></td>
                    <td alt="2:30 - 2:40 AM"></td>
                    <td alt="2:40 - 2:50 AM"></td>
                    <td alt="2:50 - 3:00 AM"></td>
                    <td alt="3:00 - 3:10 AM"></td>
                    <td alt="3:10 - 3:20 AM"></td>
                    <td alt="3:20 - 3:30 AM"></td>
                    <td alt="3:30 - 3:40 AM"></td>
                    <td alt="3:40 - 3:50 AM"></td>
                    <td alt="3:50 - 4:00 AM"></td>
                <td alt="4:00 - 4:10 AM"></td>
                <td alt="4:10 - 4:20 AM"></td>
                <td alt="4:20 - 4:30 AM"></td>
                <td alt="4:30 - 4:40 AM"></td>
                <td alt="4:40 - 4:50 AM"></td>
                <td alt="4:50 - 5:00 AM"></td>
                <td alt="5:00 - 5:10 AM"></td>
                <td alt="5:10 - 5:20 AM"></td>
                <td alt="5:20 - 5:30 AM"></td>
                <td alt="5:30 - 5:40 AM"></td>
                <td alt="5:40 - 5:50 AM"></td>
                <td alt="5:50 - 6:00 AM"></td>
                    <td alt="6:00 - 6:10 AM"></td>
                    <td alt="6:10 - 6:20 AM"></td>
                    <td alt="6:20 - 6:30 AM"></td>
                    <td alt="6:30 - 6:40 AM"></td>
                    <td alt="6:40 - 6:50 AM"></td>
                    <td alt="6:50 - 7:00 AM"></td>
                    <td alt="7:00 - 7:10 AM"></td>
                    <td alt="7:10 - 7:20 AM"></td>
                    <td alt="7:20 - 7:30 AM"></td>
                    <td alt="7:30 - 7:40 AM"></td>
                    <td alt="7:40 - 7:50 AM"></td>
                    <td alt="7:50 - 8:00 AM"></td>
                <td alt="8:00 - 8:10 AM"></td>
                <td alt="8:10 - 8:20 AM"></td>
                <td alt="8:20 - 8:30 AM"></td>
                <td alt="8:30 - 8:40 AM"></td>
                <td alt="8:40 - 8:50 AM"></td>
                <td alt="8:50 - 9:00 AM"></td>
                <td alt="9:00 - 9:10 AM"></td>
                <td alt="9:10 - 9:20 AM"></td>
                <td alt="9:20 - 9:30 AM"></td>
                <td alt="9:30 - 9:40 AM"></td>
                <td alt="9:40 - 9:50 AM"></td>
                <td alt="9:50 - 10:00 AM"></td>
                    <td alt="10:00 - 10:10 AM"></td>
                    <td alt="10:10 - 10:20 AM"></td>
                    <td alt="10:20 - 10:30 AM"></td>
                    <td alt="10:30 - 10:40 AM"></td>
                    <td alt="10:40 - 10:50 AM"></td>
                    <td alt="10:50 - 11:00 AM"></td>
                    <td alt="11:00 - 11:10 AM"></td>
                    <td alt="11:10 - 11:20 AM"></td>
                    <td alt="11:20 - 11:30 AM"></td>
                    <td alt="11:30 - 11:40 AM"></td>
                    <td alt="11:40 - 11:50 AM"></td>
                    <td alt="11:50 AM - 12:00 PM"></td>
                <td alt="12:00 - 12:10 PM"></td>
                <td alt="12:10 - 12:20 PM"></td>
                <td alt="12:20 - 12:30 PM"></td>
                <td alt="12:30 - 12:40 PM"></td>
                <td alt="12:40 - 12:50 PM"></td>
                <td alt="12:50 - 1:00 PM"></td>
                <td alt="1:00 - 1:10 PM"></td>
                <td alt="1:10 - 1:20 PM"></td>
                <td alt="1:20 - 1:30 PM"></td>
                <td alt="1:30 - 1:40 PM"></td>
                <td alt="1:40 - 1:50 PM"></td>
                <td alt="1:50 - 2:00 PM"></td>
                    <td alt="2:00 - 2:10 PM"></td>
                    <td alt="2:10 - 2:20 PM"></td>
                    <td alt="2:20 - 2:30 PM"></td>
                    <td alt="2:30 - 2:40 PM"></td>
                    <td alt="2:40 - 2:50 PM"></td>
                    <td alt="2:50 - 3:00 PM"></td>
                    <td alt="3:00 - 3:10 PM" className='clockNow'></td>
                    <td alt="3:10 - 3:20 PM"></td>
                    <td alt="3:20 - 3:30 PM"></td>
                    <td alt="3:30 - 3:40 PM"></td>
                    <td alt="3:40 - 3:50 PM"></td>
                    <td alt="3:50 - 4:00 PM"></td>
                <td alt="4:00 - 4:10 PM"></td>
                <td alt="4:10 - 4:20 PM"></td>
                <td alt="4:20 - 4:30 PM"></td>
                <td alt="4:30 - 4:40 PM"></td>
                <td alt="4:40 - 4:50 PM"></td>
                <td alt="4:50 - 5:00 PM"></td>
                <td alt="5:00 - 5:10 PM"></td>
                <td alt="5:10 - 5:20 PM"></td>
                <td alt="5:20 - 5:30 PM"></td>
                <td alt="5:30 - 5:40 PM"></td>
                <td alt="5:40 - 5:50 PM"></td>
                <td alt="5:50 - 6:00 PM"></td>
                    <td alt="6:00 - 6:10 PM"></td>
                    <td alt="6:10 - 6:20 PM"></td>
                    <td alt="6:20 - 6:30 PM"></td>
                    <td alt="6:30 - 6:40 PM"></td>
                    <td alt="6:40 - 6:50 PM"></td>
                    <td alt="6:50 - 7:00 PM"></td>
                    <td alt="7:00 - 7:10 PM"></td>
                    <td alt="7:10 - 7:20 PM"></td>
                    <td alt="7:20 - 7:30 PM"></td>
                    <td alt="7:30 - 7:40 PM"></td>
                    <td alt="7:40 - 7:50 PM"></td>
                    <td alt="7:50 - 8:00 PM"></td>
                <td alt="8:00 - 8:10 PM"></td>
                <td alt="8:10 - 8:20 PM"></td>
                <td alt="8:20 - 8:30 PM"></td>
                <td alt="8:30 - 8:40 PM"></td>
                <td alt="8:40 - 8:50 PM"></td>
                <td alt="8:50 - 9:00 PM"></td>
                <td alt="9:00 - 9:10 PM"></td>
                <td alt="9:10 - 9:20 PM"></td>
                <td alt="9:20 - 9:30 PM"></td>
                <td alt="9:30 - 9:40 PM"></td>
                <td alt="9:40 - 9:50 PM"></td>
                <td alt="9:50 - 10:00 PM"></td>
                    <td alt="10:00 - 10:10 PM"></td>
                    <td alt="10:10 - 10:20 PM"></td>
                    <td alt="10:20 - 10:30 PM"></td>
                    <td alt="10:30 - 10:40 PM"></td>
                    <td alt="10:40 - 10:50 PM"></td>
                    <td alt="10:50 - 11:00 PM"></td>
                    <td alt="11:00 - 11:10 PM"></td>
                    <td alt="11:10 - 11:20 PM"></td>
                    <td alt="11:20 - 11:30 PM"></td>
                    <td alt="11:30 - 11:40 PM"></td>
                    <td alt="11:40 - 11:50 PM"></td>
                    <td alt="11:50 PM - 12:00 AM"></td>
                
            </tr>
        </table>

    </header>)
}
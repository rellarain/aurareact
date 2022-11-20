import React from 'react';

export default function Header() {
    
    const displayName = "Rain Walker";
    const regionID = "1600";
    const districtID = "0000";
    const communityID = "0000";
    const clusterID = "0000";
    
    
    
    return (
    <header id="userHeader">
        <img src="" alt={displayName}/>
        <div id='userName'>{displayName}</div>
        <div id='userID'>
            <span>{regionID}</span>-
            {/* academy link: academy info and region list */}
            <span>{districtID}</span>-
            {/* region link: region info and district list */}
            <span>{communityID}</span>-
            {/* district link: district info and community list */}
            <span>{clusterID}</span>
            {/* community link: community info and member list */}
        </div>
        <table id='userProgress'>
            <tr>
                <td alt="12:00 AM"></td>
                <td alt="12:10 AM"></td>
                <td alt="12:20 AM"></td>
                <td alt="12:30 AM"></td>
                <td alt="12:40 AM"></td>
                <td alt="12:50 AM"></td>
                <td alt="1:00 AM"></td>
                <td alt="1:10 AM"></td>
                <td alt="1:20 AM"></td>
                <td alt="1:30 AM"></td>
                <td alt="1:40 AM"></td>
                <td alt="1:50 AM"></td>
                    <td alt="2:00 AM"></td>
                    <td alt="2:10 AM"></td>
                    <td alt="2:20 AM"></td>
                    <td alt="2:30 AM"></td>
                    <td alt="2:40 AM"></td>
                    <td alt="2:50 AM"></td>
                    <td alt="3:00 AM"></td>
                    <td alt="3:10 AM"></td>
                    <td alt="3:20 AM"></td>
                    <td alt="3:30 AM"></td>
                    <td alt="3:40 AM"></td>
                    <td alt="3:50 AM"></td>
                <td alt="4:00 AM"></td>
                <td alt="4:10 AM"></td>
                <td alt="4:20 AM"></td>
                <td alt="4:30 AM"></td>
                <td alt="4:40 AM"></td>
                <td alt="4:50 AM"></td>
                <td alt="5:00 AM"></td>
                <td alt="5:10 AM"></td>
                <td alt="5:20 AM"></td>
                <td alt="5:30 AM"></td>
                <td alt="5:40 AM"></td>
                <td alt="5:50 AM"></td>
                    <td alt="6:00 AM"></td>
                    <td alt="6:10 AM"></td>
                    <td alt="6:20 AM"></td>
                    <td alt="6:30 AM"></td>
                    <td alt="6:40 AM"></td>
                    <td alt="6:50 AM"></td>
                    <td alt="7:00 AM"></td>
                    <td alt="7:10 AM"></td>
                    <td alt="7:20 AM"></td>
                    <td alt="7:30 AM"></td>
                    <td alt="7:40 AM"></td>
                    <td alt="7:50 AM"></td>
                <td alt="8:00 AM"></td>
                <td alt="8:10 AM"></td>
                <td alt="8:20 AM"></td>
                <td alt="8:30 AM"></td>
                <td alt="8:40 AM"></td>
                <td alt="8:50 AM"></td>
                <td alt="9:00 AM"></td>
                <td alt="9:10 AM"></td>
                <td alt="9:20 AM"></td>
                <td alt="9:30 AM"></td>
                <td alt="9:40 AM"></td>
                <td alt="9:50 AM"></td>
                    <td alt="10:00 AM"></td>
                    <td alt="10:10 AM"></td>
                    <td alt="10:20 AM"></td>
                    <td alt="10:30 AM"></td>
                    <td alt="10:40 AM"></td>
                    <td alt="10:50 AM"></td>
                    <td alt="11:00 AM"></td>
                    <td alt="11:10 AM"></td>
                    <td alt="11:20 AM"></td>
                    <td alt="11:30 AM"></td>
                    <td alt="11:40 AM"></td>
                    <td alt="11:50 AM"></td>
                <td alt="12:00 PM"></td>
                <td alt="12:10 PM"></td>
                <td alt="12:20 PM"></td>
                <td alt="12:30 PM"></td>
                <td alt="12:40 PM"></td>
                <td alt="12:50 PM"></td>
                <td alt="1:00 PM"></td>
                <td alt="1:10 PM"></td>
                <td alt="1:20 PM"></td>
                <td alt="1:30 PM"></td>
                <td alt="1:40 PM"></td>
                <td alt="1:50 PM"></td>
                    <td alt="2:00 PM"></td>
                    <td alt="2:10 PM"></td>
                    <td alt="2:20 PM"></td>
                    <td alt="2:30 PM"></td>
                    <td alt="2:40 PM"></td>
                    <td alt="2:50 PM"></td>
                    <td alt="3:00 PM" className='progressNow'></td>
                    <td alt="3:10 PM"></td>
                    <td alt="3:20 PM"></td>
                    <td alt="3:30 PM"></td>
                    <td alt="3:40 PM"></td>
                    <td alt="3:50 PM"></td>
                <td alt="4:00 PM"></td>
                <td alt="4:10 PM"></td>
                <td alt="4:20 PM"></td>
                <td alt="4:30 PM"></td>
                <td alt="4:40 PM"></td>
                <td alt="4:50 PM"></td>
                <td alt="5:00 PM"></td>
                <td alt="5:10 PM"></td>
                <td alt="5:20 PM"></td>
                <td alt="5:30 PM"></td>
                <td alt="5:40 PM"></td>
                <td alt="5:50 PM"></td>
                    <td alt="6:00 PM"></td>
                    <td alt="6:10 PM"></td>
                    <td alt="6:20 PM"></td>
                    <td alt="6:30 PM"></td>
                    <td alt="6:40 PM"></td>
                    <td alt="6:50 PM"></td>
                    <td alt="7:00 PM"></td>
                    <td alt="7:10 PM"></td>
                    <td alt="7:20 PM"></td>
                    <td alt="7:30 PM"></td>
                    <td alt="7:40 PM"></td>
                    <td alt="7:50 PM"></td>
                <td alt="8:00 PM"></td>
                <td alt="8:10 PM"></td>
                <td alt="8:20 PM"></td>
                <td alt="8:30 PM"></td>
                <td alt="8:40 PM"></td>
                <td alt="8:50 PM"></td>
                <td alt="9:00 PM"></td>
                <td alt="9:10 PM"></td>
                <td alt="9:20 PM"></td>
                <td alt="9:30 PM"></td>
                <td alt="9:40 PM"></td>
                <td alt="9:50 PM"></td>
                    <td alt="10:00 PM"></td>
                    <td alt="10:10 PM"></td>
                    <td alt="10:20 PM"></td>
                    <td alt="10:30 PM"></td>
                    <td alt="10:40 PM"></td>
                    <td alt="10:50 PM"></td>
                    <td alt="11:00 PM"></td>
                    <td alt="11:10 PM"></td>
                    <td alt="11:20 PM"></td>
                    <td alt="11:30 PM"></td>
                    <td alt="11:40 PM"></td>
                    <td alt="11:50 PM"></td>
                
            </tr>
        </table>

    </header>)
}
import React from 'react';

export default function Header() {return (
    <header id="userHeader">
        {/* image element, thumbnail for profile */}
        <img src="" alt='User Thumbnail'/>
        {/* display name, shows the selected way to refer to the user */}
        <div id='userName'>Display Name</div>

        {/* ID Link: 0000-0000-0000-0000
                First 4: Links the academy roster which lists regions or all included users
                Second 4: links the region roster which lists communities or all included users
                Third 4: Links the community roster which lists clusters or all included users
                Final 4: Links the cluster roster which lists all included users
        */}
        <div id='userID'>
            <span>0000</span>-
            <span>0000</span>-
            <span>0000</span>-
            <span>0000</span>
        </div>


        {/* Progress: 
            Percentage portions: table columns that represent information on a segmented line
                Work Day: 
                Progress (Assessment): 
        */}
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
                    <td alt="3:00 PM"></td>
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
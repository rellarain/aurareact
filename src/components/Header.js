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
        <div id='userProgress'></div>

    </header>)
}
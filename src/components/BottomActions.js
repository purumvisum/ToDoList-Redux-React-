import React from 'react';

//design
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionAssignmentTurnedIn from 'material-ui/svg-icons/action/assignment-turned-in';
import ActionDoneAll from 'material-ui/svg-icons/action/done-all';
import PlacesAllInclusive from 'material-ui/svg-icons/places/all-inclusive';

function BottomFilters({showActive, showInActive, showAll}) {

    return (
        <MuiThemeProvider>
            <Paper zDepth={1}>
                <BottomNavigation >
                    <BottomNavigationItem
                        label="Show Unfulfilled"
                        icon={<ActionAssignmentTurnedIn/>}
                        onClick={() => showActive() }
                    />
                    <BottomNavigationItem
                        label="Show fulfilled"
                        icon={<ActionDoneAll/>}
                        onClick={() => {showInActive()} }
                    />
                    <BottomNavigationItem
                        label="Show All"
                        icon={<PlacesAllInclusive/>}
                        onClick={() => {showAll()} }
                    />
                </BottomNavigation>
            </Paper>
        </MuiThemeProvider>
    )
}

export default BottomFilters

import React from 'react';
// actions todo: actions must be in another file
import {toggle, remove, filterActive} from '../actions/actions';
// design
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ToggleCheckBox from 'material-ui/svg-icons/toggle/check-box';
import ToggleCheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';

const styles = {
    icon: {
       fill: '#00bcd4'
    }
};

// todo: remove store
function ToDoItem({id, text, done, onToggle, onTodoRemove}) {
    return (
        <MuiThemeProvider>
            <List>
                <ListItem key={id}
                          primaryText={text}
                          leftIcon={done && <ToggleCheckBox  style={styles.icon} /> || <ToggleCheckBoxOutlineBlank style={styles.icon}/>}
                          rightIcon={<ActionDelete onClick={onTodoRemove}/>}
                          onClick={onToggle}
                />
                <Divider />
            </List>
        </MuiThemeProvider>
    );
}
export default ToDoItem
import React, {Component} from 'react';
import Search from './Search';
import Sort from './Sort';

class TaskControl extends Component {
    render() {
        return (
            <div className="row mt-3">
                {/* Search */}
                <Search />
                {/* Sort */}
                <Sort                   
                />   
            </div>
        );
    }
}

export default TaskControl;
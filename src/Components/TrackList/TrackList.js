import './TrackList.css';
import React from 'react';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map((track) => {
          return (
            <Track
              track={track}
              key={track.id}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
              isRemoval={this.props.isRemoval}
            />
          );
        })}
        {/* 
        <h3>Killing in the Name</h3>
        <p>Rage Against The Machine | Rage Against The Machine</p>
        <h3>Fruit Salad</h3>
        <p>The Wiggles | Yummy Yummy</p>
        <h3>Break Stuff</h3>
        <p>Limp Bizkit | Significant Other</p> */}
      </div>
    );
  }
}

export default TrackList;

import React from "react";

const MissionsList = props => {
  console.log('bk: MissionsList.js: MissionsList: props.missions: ', props.missions);
  return (
    <section className="missions-list">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        <div>
          {props.missions.map(mission => (
            <div className="mission" key={mission.mission_id}>
              {mission.mission_name}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MissionsList;

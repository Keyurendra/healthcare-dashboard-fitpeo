import React from 'react';
import '../styles/ActivityFeed.css';

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

const activityData = [
  {
    bar1TopHeight: 60,
    bar1BottomHeight: 40,
    bar2Height: 55,
    bar3TopHeight: 25,
    bar3BottomHeight: 25,
    bar2BottomOffset: 20,
    bar3BottomOffset: 10,
    colors: [
      '#d3dce6',  // bar1 
      '#67e8f9',  // bar2
      '#d3dce6',  // bar3 top
      '#d3dce6',  // bar3 bottom
      '#d3dce6',  // bar4
    ],
  },
  {
    bar1TopHeight: 55,
    bar1BottomHeight: 45,
    bar2Height: 55,
    bar3TopHeight: 20,
    bar3BottomHeight: 28,
    bar2BottomOffset: 22,
    bar3BottomOffset: 15,
    colors: [
      '#67e8f9',
      '#3d4ddc',
      '#d3dce6',
      '#d3dce6',
      '#67e8f9',
    ],
  },
  {
    bar1Height: 100,
    bar2Height: 55,
    bar3TopHeight: 22,
    bar3BottomHeight: 25,
    bar2BottomOffset: 25,
    bar3BottomOffset: 18,
    colors: [
      '#d3dce6',
      '#d3dce6',
      '#67e8f9',
      '#3d4ddc',
      '#3d4ddc',
    ],
  },
  {
    bar1TopHeight: 50,
    bar1BottomHeight: 50,
    bar2Height: 55,
    bar3TopHeight: 23,
    bar3BottomHeight: 22,
    bar2BottomOffset: 28,
    bar3BottomOffset: 14,
    colors: [
      '#d3dce6',
      '#67e8f9',
      '#67e8f9',
      '#3d4ddc',
      '#d3dce6',
    ],
  },
  {
    bar1Height: 100,
    bar2Height: 55,
    bar3TopHeight: 21,
    bar3BottomHeight: 24,
    bar2BottomOffset: 30,
    bar3BottomOffset: 16,
    colors: [
      '#d3dce6',
      '#3d4ddc',
      '#d3dce6',
      '#d3dce6',
      '#d3dce6',
    ],
  },
  {
    bar1TopHeight: 55,
    bar1BottomHeight: 45,
    bar2Height: 55,
    bar3TopHeight: 19,
    bar3BottomHeight: 20,
    bar2BottomOffset: 33,
    bar3BottomOffset: 20,
    colors: [
      '#67e8f9',
      '#67e8f9',
      '#d3dce6',
      '#d3dce6',
      '#3d4ddc',
    ],
  },
  {
    bar1Height: 100,
    bar2Height: 55,
    bar3TopHeight: 20,
    bar3BottomHeight: 22,
    bar2BottomOffset: 35,
    bar3BottomOffset: 15,
    colors: [
      '#d3dce6',
      '#d3dce6',
      '#67e8f9',
      '#3d4ddc',
      '#3d4ddc',
    ],
  },
];

function ActivityFeed() {
  return (
    <div className="activity-section">
      <div className="activity-header">
        <h3>Activity</h3>
        <span className="appointment-count">3 appointments on this week</span>
      </div>
      <div className="activity-graph">
        {days.map((day, index) => {
          const data = activityData[index];

          return (
            <div className="activity-bar" key={day}>
              <div className="bar-group">
                {(index === 1 || index === 3 || index === 5) ? (
                  <div className="bar split-bar-vertical">
                    <div
                      className="split"
                      style={{
                        height: `${data.bar1TopHeight}px`,
                        backgroundColor: data.colors[0],
                      }}
                    ></div>
                    <div
                      className="split"
                      style={{
                        height: `${data.bar1BottomHeight}px`,
                        backgroundColor:
                          index === 1 ? '#3d4ddc' :
                            index === 3 ? '#d3dce6' :
                              index === 5 ? '#3d4ddc' :
                                '#a0c4ff',
                      }}
                    ></div>
                  </div>
                ) : (
                  <div
                    className="bar"
                    style={{
                      height: `${data.bar1Height || (data.bar1TopHeight + data.bar1BottomHeight)}px`,
                      backgroundColor: data.colors[0],
                    }}
                  ></div>
                )}



                <div
                  className="bar"
                  style={{
                    height: '55px',
                    backgroundColor: data.colors[1],
                    marginBottom: `${data.bar2BottomOffset}px`,
                  }}
                ></div>


                <div className="bar split-bar-vertical">
                  <div
                    className="split"
                    style={{
                      height: `${data.bar3TopHeight}px`,
                      backgroundColor: data.colors[2],
                      marginBottom: '2px',
                    }}
                  ></div>
                  <div
                    className="split"
                    style={{
                      height: `${data.bar3BottomHeight}px`,
                      backgroundColor: data.colors[3],
                      marginBottom: `${data.bar3BottomOffset}px`,
                    }}
                  ></div>
                </div>


                <div
                  className="bar"
                  style={{
                    height: '37px',
                    backgroundColor: data.colors[4],
                  }}
                ></div>

              </div>
              <div className="day-label">{day}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ActivityFeed;
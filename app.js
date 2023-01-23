import "./styles.css";
import TimeAgo from 'react-time-ago'

export default function App() {
  const time = "2023-01-20T12:02:20.000Z";
  // const time = new Date();
  return (
    <div className="App">
      <TimeAgo date={time} locale="en-US" />
    </div>
  );
}




// You can use the react-time-ago library to display the relative time for dates that are within 3 days of the current date, and then use the toLocaleString() method of the Date object to display the original format date for dates that are older than 3 days.
// Here is an example of how you can implement this in a React component:

import TimeAgo from 'react-time-ago'

function MyComponent(props) {
  const { time } = props;
  const threeDays = 3 * 24 * 60 * 60 * 1000;
  const currentTime = new Date().getTime();
  const postedTime = new Date(time).getTime();
  const timeDiff = currentTime - postedTime;

  if (timeDiff < threeDays) {
    return <TimeAgo date={time} />;
  } else {
    return <span>{new Date(time).toLocaleString()}</span>;
  }
}


// This will display the relative time using react-time-ago for dates that are within 3 days of the current date, and will display the original format date using toLocaleString() for dates that are older than 3 days.
// You can adjust the value of threeDays to suit your needs, it's representing time in milliseconds.

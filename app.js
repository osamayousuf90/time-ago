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

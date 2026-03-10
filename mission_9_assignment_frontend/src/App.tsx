import './App.css';
import data from './CollegeBasketballTeams.json';

function Heading() {
  return (
    <>
      <h1>March Maddness</h1>
      <br />
      <p>
        This is a website that lists out information about all the colleges in
        NCAA Basketball.
      </p>
    </>
  );
}

function TeamCard({
  schoolName,
  mascotName,
  location,
}: {
  schoolName: string;
  mascotName: string;
  location: string;
}) {
  return (
    <div className="team-card">
      <h2>{schoolName}</h2>
      <p>{mascotName}</p>
      <p>{location}</p>
    </div>
  );
}

function CardList() {
  return (
    <div className="team-grid">
      {data.teams.map((singleTeam) => {
        const location = `${singleTeam.city}, ${singleTeam.state}`;
        return (
          <TeamCard
            schoolName={singleTeam.school}
            mascotName={singleTeam.name}
            location={location}
          />
        );
      })}
    </div>
  );
}

function App() {
  return (
    <>
      <Heading />
      <CardList />
    </>
  );
}

export default App;

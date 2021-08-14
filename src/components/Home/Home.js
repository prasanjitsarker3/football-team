import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css';
import Photo from '../../Photo/image 4.png';


const Home = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
          const url=`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`;
          fetch(url)
          .then(res => res.json())
          .then(data=> setTeams(data.teams))

    },[])
    return (
        <div className="Header-page">
            
            <div className="header-photo">
               
               <img className="header-img" src={Photo} alt="" srcset="" />
            </div>
            <div  className="header-container">
            {/* <h1>This is the Home: {teams.length}</h1>  */}
            {
                teams.map(team => <Team team={team}></Team>)
            }
            </div>
        </div>
    );
};

export default Home;
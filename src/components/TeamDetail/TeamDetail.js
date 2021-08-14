import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './TeamDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDirections, faFlag, faFutbol, faLongArrowAltRight, faMars } from '@fortawesome/free-solid-svg-icons';
import Male from '../../Photo/male.png';
import Female from '../../Photo/female.png';
import Footer from '../Footer/Footer';


const TeamDetail = () => {
    const {idTeam} = useParams();
    const [teams, setTeams] = useState({});
    useEffect(() => {
       const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
       fetch(url)
       .then(res => res.json())
       .then(data => setTeams (data.teams[0]));
    }, [idTeam])
    const Photo = teams.strGender === 'Male' ? <img src={Male} alt="" width="90%" height="90%" srcset="" /> : <img src={Female} alt="" srcset="" />
   
    return (
        <div className="teams-container">
            <div className="header-team">
                  
                  <img src={teams.strTeamBadge} alt="" srcset="" height="20%" width="20%"/>
            </div>
            <div className="photo-header">
               <div className="banner-team">
                    <h1>  Premier League</h1>
                    <h2> <FontAwesomeIcon icon={faFutbol}/> Stadium: {teams.strStadium}</h2>
                    <h2><FontAwesomeIcon icon={faFlag}/> Country: {teams.strCountry}</h2>
                    <h2><FontAwesomeIcon icon={faDirections}/>   Formed: {teams.intFormedYear}</h2>
                    <h2><FontAwesomeIcon icon={faMars}/> Gender: {teams.strGender}</h2>
               </div>
                <div className="photo-team">
                    {Photo}
                </div>
            
                    
             </div>
            
             <div className="row">
                <Footer></Footer>
             </div>
        </div>

        
    );
};

export default TeamDetail;
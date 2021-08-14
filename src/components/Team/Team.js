import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const Team = (props) => {
    
    const {idTeam,strTeam,strTeamBadge,strCountry} = props.team;
    const history = useHistory();
    const showAbout = idTeam => {
        const url= `team/${idTeam}`;
        history.push(url);
        
    }
    
    return (
        <div className="team-container">
           <Card className="card-style" style={{ width: '20rem', height: '20rem' }}>
            <Card.Img variant="top" src={strTeamBadge} height="50%" />
                
                  <Card.Body>
                  <Card.Title>{strTeam}</Card.Title>
                  <Card.Text>{strCountry}</Card.Text>
                <Button onClick={()=>showAbout(idTeam)} variant="primary">TeamAbout<FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
               
            </Card.Body>
            </Card>

        </div>
    );
};

export default Team;
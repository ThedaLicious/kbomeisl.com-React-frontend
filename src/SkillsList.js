import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

const SkillsList = (props) => {

    const skillList = props.cluster.map((skill)=> 
        <ListGroup.Item>{skill}</ListGroup.Item>
    );

    return (
        skillList
    )
}

export default SkillsList;
import React from 'react';
import './card-list.styles.css'
import {Card} from '../card/card.component'
export const CardList = (props) => (
    <div className="card-list">
        {
        props.monsters.map(monster=>(
            <div>
          
            <Card key={monster.id} monster={monster}/>
            </div>
        ))
        }
    </div>
)   
import React from "react";

import { Card } from "../card/card.component";

import './card-list.styles.css';

export interface Monster {
    name: string;
    id: string;
    email: string;
} 

export const CardList = (props: {monsters: Monster[]}) => {
    return (
        <div className="card-list">
            {props.monsters.map((monster: Monster) => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    )
}
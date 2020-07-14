import React from 'react';
import { CombatLocationButton } from './CombatLocationButton';
import { images } from 'images/images';
import { CombatLocation } from 'models/CombatLocation';

export const CombatLocationSelectionRow = (props: { onClickLocation: (location: CombatLocation) => void }) => {
    return (
        <div style={{ height: 70, width: `100%`, borderBottom: '3px solid black', display: 'flex', flexDirection: 'row' }}>
            <CombatLocationButton
                onClick={() => props.onClickLocation(CombatLocation.FARM)}
                icon={images.combatBG.FARM_BG}
                isLocked={false}
            />
            <CombatLocationButton
                onClick={() => props.onClickLocation(CombatLocation.SEWER)}
                icon={images.combatBG.SEWER_BG}
                isLocked={false}
            />
            <CombatLocationButton
                onClick={() => props.onClickLocation(CombatLocation.GRAVE)}
                icon={images.combatBG.GRAVE_BG}
                isLocked={false}
            />
            <CombatLocationButton onClick={() => {}} icon={''} isLocked={true} />
            <CombatLocationButton onClick={() => {}} icon={''} isLocked={true} />
            <CombatLocationButton onClick={() => {}} icon={''} isLocked={true} />
            <CombatLocationButton onClick={() => {}} icon={''} isLocked={true} />
            <CombatLocationButton onClick={() => {}} icon={''} isLocked={true} />
            <CombatLocationButton onClick={() => {}} icon={''} isLocked={true} />
        </div>
    );
};

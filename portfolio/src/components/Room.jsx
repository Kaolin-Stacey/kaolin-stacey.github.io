import { useState } from 'react';
import Desk from './Desk';
import Window from './Window';
import SubroomView from './SubroomView';
import { useThemeSwitcher } from '../hooks/useThemeSwitcher';
import { useRoomNavigation } from '../hooks/RoomNavigationContext';


export default function Room() {
  const { currentSubroom, enterSubroom, exitSubroom } = useRoomNavigation();
  const [theme, setTheme] = useThemeSwitcher();

  const isNight = theme === 'night';

  return (
    <div className="Room">
        {currentSubroom? (
          <SubroomView name={currentSubroom} onExit={exitSubroom} isNight={isNight} />
        ) : (
          <div className="main-room">
            <Window size="200"/>
            <Desk />
          </div>
        )}
    </div>
  );
}
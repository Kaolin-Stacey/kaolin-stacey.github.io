import React, { createContext, useContext, useState } from 'react';

const RoomNavigationContext = createContext();

export function RoomNavigationProvider({ children }) {
    const [subroomStack, setSubroomStack] = useState([]);

    const enterSubroom = (roomName) => {
        setSubroomStack((prev) => [...prev, roomName]);
    };

    const exitSubroom = () => {
        setSubroomStack((prev) => {
            if (prev.length === 0) return prev;
            return prev.slice(0, -1);
        });
    };

    const currentSubroom = subroomStack.length > 0 ? subroomStack[subroomStack.length - 1] : null;

    const resetRooms = () => {
        setSubroomStack([]);
    };

    return (
        <RoomNavigationContext.Provider 
            value={{ currentSubroom, enterSubroom, exitSubroom, resetRooms, subroomStack }}
        >
            {children}
        </RoomNavigationContext.Provider>
    );

}

export function useRoomNavigation() {
    const context = useContext(RoomNavigationContext);
    if (!context) {
        throw new Error('useRoomNavigation must be used within a RoomNavigationProvider');
    }
    return context;
}
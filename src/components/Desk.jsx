import { ReactComponent as DeskBase } from "../assets/svg/DeskBase.svg";
import Monitor from "./Monitor";
import { ReactComponent as Keyboard } from "../assets/svg/Keyboard.svg";
import { useRoomNavigation } from "../hooks/RoomNavigationContext";

export default function Desk() {
  const { enterSubroom } = useRoomNavigation();

  return (
    <svg viewBox="0 0 400 250" width="400" height="250" aria-label="Desk">
      <DeskBase />

      {/* Horizontal Monitor, scaled down and positioned */}
      <g transform="translate(150, 86.5) scale(0.25)">
        <Monitor
          orientation="horizontal"
          onClick={() => enterSubroom("Code")}
        />
      </g>

      {/* Vertical Monitor, scaled down and positioned */}
      <g transform="translate(205, 74) scale(0.3)">
        <Monitor orientation="vertical" onClick={() => enterSubroom("Code")} />
      </g>

      {/* Keyboard, scaled down and positioned */}
      <g transform="translate(170, 150) scale(0.3)">
        <Keyboard onClick={() => console.log("Keyboard Clicked")} />
      </g>
    </svg>
  );
}

import {ReactComponent as MonitorVertical} from '../assets/svg/MonitorVertical.svg';
import {ReactComponent as MonitorHorizontal} from '../assets/svg/MonitorHorizontal.svg';

export default function Monitor({orientation = 'horizontal',onClick}) {
    if (orientation === 'horizontal') {
        return (
            <MonitorHorizontal
                onClick={onClick}
                style={{ cursor: 'pointer' }}
                role="button"
                aria-label="Horizontal Monitor"
            />
        );
    }
    return (
        <MonitorVertical
            onClick={onClick}
            style={{ cursor: 'pointer' }}
            role="button"
            aria-label="Vertical Monitor"
        />
    );
}

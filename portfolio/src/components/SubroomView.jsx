export default function SubroomView({ name, onExit, reset}) {
    return (
        <div className="subroom">
            <button onClick={onExit}>⬅ Back</button>
            <button onClick={reset}>Reset</button>
            <h2>{name.toUpperCase()}</h2>
        </div>
    );
}
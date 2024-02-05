export enum UserStatus {
    ACTIVE = 'active',
    DEACTIVATE = 'deactivate',
    HOLD = 'hold'
}

interface HeaderProps<T, R>{
    name: T;
    birthDay: R;
    status: UserStatus;
    addNewUser: (add: number) => void;
}

export const Header = ({name, birthDay, status, addNewUser}: HeaderProps<string, number>) => (
    <header>
        <div>
            <p>{name}</p>
            <span>{birthDay}</span>
            <span>{birthDay}</span>
            <div>{status}</div>
            <button onClick={() => addNewUser(1)}>new user</button>
        </div>
    </header>
)

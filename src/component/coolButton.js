export const CoolButton = ({onClickHandler, children}) => {
    return (
        <button onClick={onClickHandler} >
            {children}
        </button>
    )
}
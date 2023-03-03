

interface btn {
    setState: any,
    state: boolean,
    get: any
}

const EdAndDelBtns: React.FC<btn> = ({state, get}) => {

    return (
        <div className={state ? 'btns-wrapper' : 'none'}>
            <button onClick={get} className="first">Edit</button>
            <button className="first second">Delete</button>
        </div>
    )
}

export default EdAndDelBtns
export const DelIcon = ({handleDel}) => {
    return (
        
        <svg onClick={handleDel} id="card_del"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M6 5H18M9 5V5C10.5769 3.16026 13.4231 3.16026 15 5V5M9 20H15C16.1046 20 17 19.1046 17 18V9C17 8.44772 16.5523 8 16 8H8C7.44772 8 7 8.44772 7 9V18C7 19.1046 7.89543 20 9 20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        )
}

export const UpdateIcon = ({handleUpdate}) => {
    return (
        
        <svg onClick={handleUpdate} xmlns="http://www.w3.org/2000/svg" id="card_update"  viewBox="0 0 24 24" fill="none">
        <path d="M14 6L8 12V16H12L18 10M14 6L17 3L21 7L18 10M14 6L18 10M10 4L4 4L4 20L20 20V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        )
}
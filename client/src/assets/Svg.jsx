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

export const BookmarkIcon = ({handleBookmark}) => {
    return (
        <svg onClick = {handleBookmark} viewBox="0 0 16 16" id = "bookmark" xmlns="http://www.w3.org/2000/svg" fill="#ffce6c"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12.5 1h-9l-.5.5v13l.872.335L8 10.247l4.128 4.588L13 14.5v-13l-.5-.5zM12 13.2L8.372 9.165h-.744L4 13.2V2h8v11.2z"></path></g></svg>
    )
}

export const DelBookmarkIcon = ({handleDelBookmark}) => {
    return(
        <svg onClick = {handleDelBookmark} viewBox="0 0 450 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffce6c"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>bookmark-filled</title> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="icon" fill="#ffce6c" transform="translate(128.000000, 64.000000)"> <polygon id="Path" points="256 0 256 384 128 298.666667 0 384 0 0"> </polygon> </g> </g> </g></svg>
    )
}

export const AddImageIcon = () =>{
    return(
        <svg width="26px" height="26px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24"></rect> <g> <path d="M23 4v2h-3v3h-2V6h-3V4h3V1h2v3h3zm-8.5 7c.828 0 1.5-.672 1.5-1.5S15.328 8 14.5 8 13 8.672 13 9.5s.672 1.5 1.5 1.5zm3.5 3.234l-.513-.57c-.794-.885-2.18-.885-2.976 0l-.655.73L9 9l-3 3.333V6h7V4H6c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2v-7h-2v3.234z"></path> </g> </g></svg>
    )
}
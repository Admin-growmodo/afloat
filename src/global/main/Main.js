export default function Main({children, containerClass}) {
    return (
        <div className='main'>
            <div className={`container ${containerClass}`} >
                {children}
            </div>
        </div>
    )
}
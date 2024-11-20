
const Options = ({options, updateFeedback})=>
{
    return(
        <div>
            {options.map(option=>(
                <button key={option} onClick={()=>updateFeedback(option)} >
                    {option}
                </button>
            ))}
        </div>
    )
}

export default Options
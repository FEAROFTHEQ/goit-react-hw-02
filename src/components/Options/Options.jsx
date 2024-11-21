import s from "./Options.module.css"

const Options = ({options, updateFeedback})=>
{
    return(
        <div className={s.container}>
            {options.map(option=>(
                <button key={option} onClick={()=>updateFeedback(option)} className={s.btn}>
                    {option}
                </button>
            ))}
        </div>
    )
}

export default Options
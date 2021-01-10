import React from "react"

export  const AppInput = (props)=>{
    const { type, className, placeholder, value, onChange, name, error  } = props
    return(
        <div>
            <input 
            type={type} 
            onChange={onChange}
            className={className}
            placeholder={placeholder}
            value={value}
            name={name}
            error={error}
            
            />

        </div>
    )
}



export const AppButton = (props)=>{
    const { disable, name,onClick, className, loading} = props
    return (
        <div>
            <button
             className={className} 
             disable={disable}
             onClick={onClick}
            >
                {name}
                {loading ? <i style={{ marginLeft: 15, fontSize: 16 }} className="fa fa-circle-o-notch fa-spin"></i> : null}
            </button>
        </div>
    )

}
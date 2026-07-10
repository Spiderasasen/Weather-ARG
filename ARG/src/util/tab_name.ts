import React from "react";

export function tab_name(name:string):void{
    React.useEffect(()=>{
        document.title = name;
    })
}
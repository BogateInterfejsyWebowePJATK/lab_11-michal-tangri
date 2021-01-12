import React from "react"

export default function RefreshButton( {onRefresh = f => f} ) {
    return ( <button type="button" onClick={() => onRefresh()} >Refresh</button> )
}
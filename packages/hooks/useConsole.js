
import { useEffect } from 'react'

export default (msg) => {
    useEffect(() => {
        console.log(msg)
    }, [])
}

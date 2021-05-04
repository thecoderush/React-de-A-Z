import './Item2.css'
import image2 from './munro-studio.jpg'
import cat from './cat.svg'
import {ReactComponent as Flying_Cat} from './kitty.svg' 

function Item2() {

    const toggle = true
    const toggle2 = !true
    const styleCSS = {color: toggle2 ? 'crimson' : 'green', fontSize: '50px'}

    return (
        <>
            <h3 style={{color: toggle ? 'crimson' : 'green', fontSize: '50px'}}>Hello depuis Item2</h3>
            <h3 style={styleCSS}>Hello depuis Item2</h3>
            <h3 className='external-css-file'>Hello depuis Item2</h3>
            <img src={'https://images.unsplash.com/photo-1619983403504-c22e32aedc6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'} alt="person standing on rock under cloudy sky during daytime"/>
            <img className='purple-flowers' src={image2} alt="purple and white flowers on gray wooden fence"/>
            <img src={cat} alt="purple cat sitting with stars" />
            
            <Flying_Cat />
            <Flying_Cat />
            <Flying_Cat />
        </>
    )
}

export default Item2 
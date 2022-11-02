import React from 'react';
import Aboutimg from './img/htmlpic.png';
import './Aboutbox.css'

const aboutbox = () => {
  return (
    <section className='aboutContent'>
        <article>
        <h2>Lorem ipsum dolor</h2>
            <div className='contentfull'>
                <img src={Aboutimg} alt="imge"  className='img_circle'/>  Proin volutpat est mi, in aliquet erat vulputate semper. Fusce urna arcu, tempor nec ante sed, consequat tristique nunc. Quisque in nisl gravida, maximus sapien eu, tristique enim. Mauris a dui in purus rhoncus scelerisque. Curabitur feugiat lacus et enim vulputate hendrerit. Nunc blandit maximus augue, quis accumsan nunc molestie nec. ornare ante quis congue. Quisque non sapien eget sem sagittis euismod.
            </div>
         </article>
    </section>
  )
}

export default aboutbox


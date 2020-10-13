import React from 'react'

export const Content = ({theme, toggleTheme}) => {
    return (
        <div>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Iusto quae id ut expedita! Molestiae minus harum dolores.
                In doloribus dolore aspernatur vel at, ipsa assumenda excepturi aliquam sint eum rerum.
            </h1>
            <button onClick={toggleTheme} className="btn-primary">click on Sun and Moon icon</button>
        </div>
    )
}

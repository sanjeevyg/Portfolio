import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({...routerProps}) {
    console.log(routerProps)
    return (
        <div>
              <Link to="/projects">Project</Link>
              <Link to="/about">About</Link>
        </div>
    )
}

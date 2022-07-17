import './sidebar.css'
import logo from './../../logo.png'

import SideCard from '../common/sideCard/SideCard'

const sideObjects = {
    cards:[
        {
            img:logo,
            title:'CLEVERPY Community is a community of 878,243 amazing developers',
            body:"We're a place where coders share, stay up-to-date and grow their careers."
        },
        {
            title:'Calling all early-career developers & coding mentors!',
            body:'Join CodeNewbie Community: a supportive space for coding newbies to connect & express themselves. Get in on the fun!'
        }
    ],
    things:[
        '🏠 Home',
        '📋 List',
        '🎤 Podcasts',
        '🎥 Videos',
        '📌 Tags'
    ],
    tags:[
        '# javascript',
        '# rust',
        '# java',
        '# php',
        '# github',
        '# security',
        '# showdev',
        '# testing',
        '# react',
        '# laravel'
    ]
}

export default () => {
    
    return (
        <div className='sidebar_wrapper'>
            <div>
                <SideCard {...sideObjects.cards[0]} />
            </div>
            <div className='side_block'>
                {sideObjects.things.map(obj => <div className='side_obj'>{obj}</div>)}
            </div>
            <div className='side_block'>
                <h3>Popular Tags</h3>
                <div className='sidebar_tags'>
                    {sideObjects.tags.map(tag => <div className='side_obj'>{tag}</div>)}
                </div>
            </div>
            <div className='side_block'>
                <SideCard {...sideObjects.cards[1]} />
            </div>
        </div>
    )
}
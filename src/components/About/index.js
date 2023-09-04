import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faDocker, faGitAlt,  faNode, faPython } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return ()=> setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1 className='about-tag'>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm Rohan Patel, a senior  pursuing a dual major in Computer Science and Economics at Rutgers University. 
                        With a passion for technology and a keen interest in back-end development, I find joy in crafting robust infrastructure 
                        systems and honing my skills in differnet languges and framewords. 
                    </p>
                    <p>
                        As a motivated problem-solver, I thrive in the world of algorithms 
                        and data structures, always eager to take on new challenges. My goal is to leverage my unique combination of technical expertise 
                        and economic insights to create innovative solutions that make a real impact. 
                    </p> 
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faDatabase} color="#a7c5f9" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faNode} color="#3C873A" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faPython} color="#ffffc3" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faAws} color="#FF9900" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faDocker} color="#0db7ed" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#f34f29" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About
import React from 'react'

const SocialButtons = ({FacebookIcon, GithubIcon, LinkedinIcon}) => {
    return (
        <>
            <div className='icons-container'>
                {FacebookIcon && <FacebookIcon size='3rem' />}
                {GithubIcon && <GithubIcon size='3rem'/>}
                {LinkedinIcon && <LinkedinIcon size='3rem'/>}
            </div>
        </>
    )
}

export default SocialButtons
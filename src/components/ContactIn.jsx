import {MdEmail, MdPhone, MdLocationOn} from 'react-icons/md';
import ContactBox from '../components/ContactBox'
import {useContext } from 'react';
import PropContext from '../Hooks/PropContext'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

function ContactInfo() {
    const {theme, darkMode} = useContext(PropContext)

    const setInformation = [
        {id: 1,
        icon: <MdEmail />,
        main: 'Email',
        info: 'kebisel21@gmail.com'
        },
        {id: 2,
        icon: <MdPhone />,
        main: 'Phone',
        info: '+ (251) 905 814 344'
        },
        {
        id: 3,
        icon: <MdLocationOn />,
        main: 'Location',
        info: 'Addis Ababa, Ethiopia'
        }
    ];

    return (
        <div className="contact-info-container" style={{color:theme.color }}>
            <h1 className="contact-title">Contact Information</h1>
            <div className="contact-list">
                {setInformation.map((info) => (
                    <ContactBox key={info.id} icon={info.icon} main={info.main} info={info.info}
                    />
                ))}
            </div>
            <h1 className="connect-title">Connect with me</h1>
            <div className="social-links">
                <a style={{color:darkMode? 'white' :'black'}} href='https://github.com/kebi-gizachew' target='_blank' rel='noreferrer'>
                    <FaGithub />
                </a>
                <a style={{color: darkMode ? 'white' : 'black' }} href='https://www.linkedin.com/in/kebron-selamu-496580371?utm_source=sh
        are&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noreferrer'>
                    <FaLinkedin />
                </a>
                <a style={{color: darkMode ?'white' :'black' }}
                    href='mailto:kebisel21@gmail.com'>
                    <MdEmail />
                </a>
            </div>
        </div>
    )
}

export default ContactInfo
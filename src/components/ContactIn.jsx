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
        <div className="bg-transparent w-[50%] h-[50%] flex flex-col justify-center items-center pb-[50px] transition-all duraation-300 ease-in-out max-[768px]:w-[90%] max-[768px]:h-auto max-[768px]:pb-[30px]" style={{color:theme.color }}>
            <h1 className="text-[30px] font-bold mb-[20px] max-[768px]:text-[24px] max-[768px]:text-center">Contact Information</h1>
            <div className="flex flex-col justify items-center gap-[20px] mt-[20px] max-[768px]:gap-[15px] max-[768px]:mt-[15px]">
                {setInformation.map((info) => (
                    <ContactBox key={info.id} icon={info.icon} main={info.main} info={info.info}
                    />
                ))}
            </div>
            <h1 className="mt-[40px] max-[768px]:mt-[30px] max-[768px]:text-[18px] max-[768px]:text-center">Connect with me</h1>
            <div className="flex gap-[30px] text-[40px] w-[400px] justify-evenly mt-[20px] max-[768px]:flex-wrap max-[768px]:gap-[20px] max-[768px]:text-[30px] max-[768px]:w-full max-[768px]:justify-center max-[768px]:mt-[15px]">
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
import alibaba from '../../assets/images/alibaba.png';
import vendr from '../../assets/images/vendr.png';
import vestwell from '../../assets/images/vestWell.png';
import snapdocs from '../../assets/images/snapdocs.png';
import toast from '../../assets/images/toast.png';
import connex from '../../assets/images/connex.png';
import mineral from '../../assets/images/mineral.png';
import flywair from '../../assets/images/flywire.png';
import quovo from '../../assets/images/quovo_logo.png';
import spendesk from '../../assets/images/spendesk.svg';
import nota from '../../assets/images/nota_bene_logo 1.svg';
import recurly from '../../assets/images/Recurly_Logo.svg';
import fireblocks from '../../assets/images/fireblocks.svg';
import kenso from '../../assets/images/kensho-social.png';
import future from '../../assets/images/future.png';
import argyle from '../../assets/images/argyle-black-l 2.png';
import snapsheet from '../../assets/images/snapsheet.png';

const PortfolioCompany = () => {
    const images = [
        { src: alibaba},
        { src: vendr},
        { src: vestwell},
        { src: snapdocs},
        { src: vendr},
        { src: snapdocs},
        { src: toast},
        { src: connex},
        { src: connex},
        { src: mineral},
        { src: flywair},
        { src: quovo},
        { src: spendesk},
        { src: nota},
        { src: recurly},
        { src: fireblocks},
        { src: kenso},
        { src: future},
        { src: argyle},
        { src: snapsheet}
    ];
    return (
        <div>
            <div>
                <hr className='border border-[#90B8F0] mt-16 lg:mt-20' />
            </div>
            <div>
                <h1 className='text-3xl lg:text-5xl font1 mt-24 lg:mt-20'>Selected WPPOOL Portfolio Companies</h1>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 mt-8'>
                {images.map((image, index) => (
                    <div key={index} className='bg-white w-[170px] lg:w-[220px] h-[90px] lg:h-[120px] flex items-center justify-center rounded-lg'>
                        <img src={image.src} alt={image.alt} className='max-w-full max-h-full' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioCompany;
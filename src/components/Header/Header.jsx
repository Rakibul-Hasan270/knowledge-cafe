import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-3 border-b-4'>
            <h3 className='text-5xl font-bold'>Knowledge Cafe</h3>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;
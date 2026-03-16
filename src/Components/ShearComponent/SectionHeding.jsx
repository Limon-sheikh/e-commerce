

const SectionHeding = ({title,subtitle,description}) => {
    return (
        <div>
            <h1 className='text-4xl font-semibold'> {title} <span className='prcolor'> {subtitle} </span></h1>
            <p>{description}</p>
        </div>
    );
};

export default SectionHeding;
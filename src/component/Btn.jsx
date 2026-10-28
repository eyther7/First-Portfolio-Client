
const Btn = (props) => {

    const type = props?.type || '';

    const width = props.width || '';
    const height = props.height || 'h-11';

    console.log(height);
    

    return (

        <>
            {
                type === 'primary'
                    ?
                    (
                        <button
                            className={`${height} ${width} px-6 text-[#06211F]  cursor-pointer duration-1000 hover:text-[#2DE2C5] font-semibold bg-[#2DE2C5] hover:border border-[#2DE2C5] hover:bg-transparent rounded-lg`}
                        >
                            {props?.text}
                        </button>
                    )
                    :
                    (
                        <button
                            className={`${height} ${width} px-6 text-[#2DE2C5] cursor-pointer duration-1000 hover:text-[#06211F] font-semibold bg-transparent hover:bg-[#2DE2C5]  border border-[#2DE2C5] rounded-lg`}
                            >
                            {
                                props?.text
                            }
                        </button>
                    )
            }
        </>

    );
};

export default Btn;